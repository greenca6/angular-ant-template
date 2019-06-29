import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow consumers to listen to published events', (done) => {
    const EVENT = 'foo';
    const PAYLOAD = 'payload';

    service.get(EVENT).subscribe(payload => {
      expect(payload).toEqual(PAYLOAD);
      done();
    });

    service.publish(EVENT, PAYLOAD);
  });

  it('should return the same subscription twice', () => {
    const EVENT = 'foo';
    const subscription1 = service.get(EVENT);
    const subscription2 = service.get(EVENT);

    expect(subscription1).toBe(subscription2);
  });
});
