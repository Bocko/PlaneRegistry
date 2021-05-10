import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plane } from './model/plane';
import { imgs } from './model/imgs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService 
{
  createDb() 
  {
    const planes = 
    [
      {id: 1, name: "F-117", country: "US",maxAltitude: 45000, maxSpeed: 594, role: "Attack", manufacturer: "Lockheed",p1: "p1", p2: "p12", p3: "p13", p4: "p14",imgs: [ imgs[1],imgs[6],imgs[7],imgs[8] ]},
      {id: 2, name: "SR-71", country: "US",maxAltitude: 85000, maxSpeed: 1910, role: "Reconnaissance", manufacturer: "Lockheed",p1: "p2", p2: "p2", p3: "p2", p4: "p2",imgs: [ imgs[2],imgs[2],imgs[2],imgs[2] ]},
      {id: 3, name: "B-2", country: "US",maxAltitude: 50000, maxSpeed: 550, role: "Attack", manufacturer: "Lockheed",p1: "p3", p2: "p3", p3: "p3", p4: "p3",imgs: [imgs[3],imgs[3],imgs[3],imgs[3]]},
      {id: 4, name: "U-2", country: "US",maxAltitude: 80000, maxSpeed: 413, role: "Reconnaissance", manufacturer: "Lockheed",p1: "p4", p2: "p4", p3: "p4", p4: "p4",imgs: [imgs[4],imgs[4],imgs[4],imgs[4]]}
    ];
    return {planes};
  }

  genId(planes: Plane[]): number {
    return planes.length > 0 ? Math.max(...planes.map(plane => plane.id)) + 1 : 1;
  }
}