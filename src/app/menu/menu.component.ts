import { Component, OnInit } from '@angular/core';
import { Plane } from '../model/plane';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'rg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit 
{
  planes: Plane[] = [];
  grid: boolean = true;
  viewBtnTxt: String = "List";
  
  constructor(private planeservice: PlaneService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.planeservice.getPlanes()
    .subscribe(heroes => this.planes = heroes);
  }

  switchView(): void
  {
    this.grid = !this.grid;
    this.viewBtnTxt = this.grid?"List":"Grid";
  }
}
