import { Component, Input, OnInit } from '@angular/core';
import { Plane } from 'src/app/model/plane';

@Component({
  selector: 'rg-menu-items-grid',
  templateUrl: './menu-items-grid.component.html',
  styleUrls: ['./menu-items-grid.component.scss']
})
export class MenuItemsGridComponent implements OnInit 
{
  @Input()
  plane: Plane;
  
  constructor() { }

  ngOnInit(): void {
  }

}
