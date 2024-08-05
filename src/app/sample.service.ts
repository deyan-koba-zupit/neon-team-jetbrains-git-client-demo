import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  getData(): Observable<{ id: number, name: string }[]> {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    return of(data)
      .pipe(
        map((items) => items.map((item, idx) => ({id: idx, name: item}))),
        delay(500)
      );
  }
}
