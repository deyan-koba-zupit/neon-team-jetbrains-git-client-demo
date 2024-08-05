import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  getData(): Observable<string[]> {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    return of(data).pipe(delay(1000));
  }
}
