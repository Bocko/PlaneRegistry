import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { Plane } from '../model/plane';
import { PlaneService } from '../plane.service';
import { imgs } from '../model/imgs';

@Component({
  selector: 'rg-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit 
{
  plane: Plane = {id: -1,name:"",country:"",maxSpeed: 0, maxAltitude: 0,role: "", manufacturer: "",imgs: [imgs[0]]};
  id: number;
  imgUrl = "";
  viewerOpen = false;

  constructor(
    private route: ActivatedRoute, 
    private planeservice: PlaneService,
    private modalService: NgbModal) {}

  ngOnInit(): void 
  {
    this.getPlane();
  }

  getPlane(): void 
  {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.planeservice.getPlane(this.id).subscribe(plane => this.plane = plane);
  }

  delete(): void
  {
    this.planeservice.deletePlane(this.id).subscribe();
  }

  deleteClick(): void
  {
    this.openDeleteConfirmModal(this.plane);
  }

  openDeleteConfirmModal(plane: Plane) 
  {
    let modal = this.modalService.open(DeleteConfirmComponent, { backdrop: 'static', centered: true });
    (modal.componentInstance as DeleteConfirmComponent) 
      .initParameters(
      { 
        plane
      }, 
      {
        delete: () => {
          modal.close();
          this.delete();
        },
        cancel: () => {
          modal.close();
        }
      });
  }

  openImg(img:string): void
  {
    this.imgUrl = img;
    this.viewerOpen = true;
  }
}
