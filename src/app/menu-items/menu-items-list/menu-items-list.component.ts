import { Component, Input, OnInit } from '@angular/core';
import { Plane } from 'src/app/model/plane';

@Component({
  selector: 'rg-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss']
})
export class MenuItemsListComponent implements OnInit 
{
  @Input()
  plane: Plane;

  constructor() { }

  ngOnInit(): void {
  }

}
