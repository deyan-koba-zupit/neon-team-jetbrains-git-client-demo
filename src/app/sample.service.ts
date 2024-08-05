import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";

interface SampleData {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  getData(): Observable<SampleData[]> {
    const data: SampleData[] = [
      {
        id: 1,
        name: 'Item 1'
      },
      {
        id: 2,
        name: 'Item 2'
      },
      {
        id: 3,
        name: 'Item 3'
      },
      {
        id: 4,
        name: 'Item 4'
      }
    ];
    return of(data).pipe(delay(1000));
  }
}
