import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Plane } from '../model/plane';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'rg-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  planes$: Observable<Plane[]>;
  private searchTerms = new Subject<string>();

  constructor(private planesevice: PlaneService) { }

  search(term: string): void
  {
    this.searchTerms.next(term);
  }

  clearSearch(): void
  { 
    this.planes$ = of([]);
  }

  refreshSearch(): void
  {
    this.planes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),switchMap((term: string) => this.planesevice.searchPlanes(term)),
    );
  }

  ngOnInit(): void {}

}
