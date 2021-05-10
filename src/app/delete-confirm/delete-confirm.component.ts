import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plane } from '../model/plane';

@Component({
  selector: 'rg-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  @Input()
  plane: Plane;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  initParameters( inputs: { plane: Plane }, outputs: { delete: (...args: any[]) => any, cancel: (...args: any[]) => any} ) 
  {
    for (let prop in inputs)
      this[prop] = inputs[prop];

    for (let prop in outputs)
      (this[prop] as EventEmitter<any>).subscribe(outputs[prop]);
  }

}
