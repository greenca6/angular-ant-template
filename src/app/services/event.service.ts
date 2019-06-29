import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventService {
  public static API_REQ_FAILURE: string = 'API_REQ_FAILURE';

  private emitters: { [id: string]: EventEmitter<any> } = {};

  constructor() { }

  publish(id: string, payload: any): void {
    if (!this.emitters[id]) {
      this.emitters[id] = new EventEmitter();
    }

    this.emitters[id].emit(payload);
  }

  get(id: string): EventEmitter<any> {
    if (!this.emitters[id]) {
      this.emitters[id] = new EventEmitter();
    }

    return this.emitters[id];
  }

}
