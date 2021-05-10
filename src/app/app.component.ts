import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  constructor(private titleService: Title) 
  {
    this.titleService.setTitle("Epik Plane Registry 2000");
  }
  
  year = new Date().getFullYear();
}
