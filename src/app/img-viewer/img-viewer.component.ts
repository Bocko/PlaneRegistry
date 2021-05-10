import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rg-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {

  @Input() open: boolean;
  @Input() imgUrl: string;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
