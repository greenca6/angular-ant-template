import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EventService } from './event.service';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
  constructor(private http: HttpClient, private events: EventService) { }

  getResponse(): Observable<any> {
    const url = '/api/hello-world';

    return this.http.get(url).pipe(
      catchError(error => {
        this.events.publish(EventService.API_REQ_FAILURE, error);
        return throwError(error);
      })
    );
  }
}
