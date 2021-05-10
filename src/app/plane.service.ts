import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Plane } from './model/plane';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private planesUrl = 'api/planes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor
  (
    private http: HttpClient) { }

  getPlanes(): Observable<Plane[]> 
  {
    return this.http.get<Plane[]>(this.planesUrl).pipe(
        catchError(this.handleError<Plane[]>('getPlaness', []))
      );
  }

  getPlane(id: number): Observable<Plane> 
  {
    const url = `${this.planesUrl}/${id}`;
    return this.http.get<Plane>(url).pipe(
      catchError(this.handleError<Plane>(`getplane id=${id}`))
    );
  }

  updatePlane(plane: Plane): Observable<any> 
  {
    return this.http.put(this.planesUrl, plane, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deletePlane(id: number): Observable<Plane> 
  {
    const url = `${this.planesUrl}/${id}`;
    return this.http.delete<Plane>(url, this.httpOptions).pipe(
      catchError(this.handleError<Plane>('deletePlane'))
    );
  }

  addPlane(plane: Plane): Observable<Plane> 
  {
    return this.http.post<Plane>(this.planesUrl, plane, this.httpOptions).pipe(
      catchError(this.handleError<Plane>('addPlane'))
    );
  }

  searchPlanes(term: string): Observable<Plane[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Plane[]>(`${this.planesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Plane[]>('searchHeroes', []))
    );
  }
    
  private handleError<T>(operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => 
    {
      console.error(error);
      return of(result as T);
    };
  }
}
