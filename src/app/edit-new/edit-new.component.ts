import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plane } from '../model/plane';
import { Location} from '@angular/common';
import { PlaneService } from '../plane.service';
import { imgs } from '../model/imgs';

@Component({
  selector: 'rg-edit-new',
  templateUrl: './edit-new.component.html',
  styleUrls: ['./edit-new.component.scss']
})
export class EditNewComponent implements OnInit {

  edit: boolean;
  id: number = 0;
  plane: Plane = {} as Plane;
  saveBtnTxt: string;

  img: string = imgs[9];
  imgName: string = "No File Choosen";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private planeservice: PlaneService) { }

  loadDefPlane()
  {
    this.plane.name = "";
    this.plane.country = "";
    this.plane.manufacturer = "";
    this.plane.imgs = []
  }

  ngOnInit(): void 
  {
    
    this.loadDefPlane();
    this.route.url.subscribe(e => {
      this.edit = !(e[1].path === 'new');
    });

    if(this.edit)
    {
      this.getPlane();
      this.saveBtnTxt="Update";
    }
    else
    {
      this.saveBtnTxt = "Create";
    }
  }

  getPlane(): void 
  {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.planeservice.getPlane(this.id).subscribe(plane => this.plane = plane);
  }

  save(): void
  {
    if(this.edit)
    {
      this.planeservice.updatePlane(this.plane).subscribe();
    }
    else
    {
      this.planeservice.addPlane(this.plane).subscribe();
    }
  }

  addImg(): void
  {
    if(this.img != "")
    {
      this.plane.imgs.push(this.img);
    }
    this.img = imgs[9];
    this.imgName = "No File Choosen";
  }

  deleteImg(event): void
  {
    this.plane.imgs.splice(event.target.id,1);
  }

  checkForEmpty(): boolean
  {
    if(
      this.plane.name.trim() == "" ||
      this.plane.country.trim() == "" ||
      this.plane.manufacturer.trim() == "" ||
      this.plane.role.trim() == "" ||
      this.plane.maxSpeed == null ||
      this.plane.maxAltitude == null
      )
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  goBack(): void
  {
    if(this.edit)
    {
      this.location.back();
    }
  }

  handleUpload(event) 
  {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => 
    {
      this.img = reader.result.toString();
      this.imgName = event.target.files[0].name
    };
  }
}
