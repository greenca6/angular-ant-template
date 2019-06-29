import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HelloWorldService } from './hello-world.service';

const mockResponse = require('../../../__mocks__/hello-world.json');

describe('HelloWorldService', () => {
  let service: HelloWorldService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(HelloWorldService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a response', () => {
    service.getResponse().subscribe(res => {
      expect(res.length).toBe(mockResponse.length);
    });

    const req = httpTestingController.expectOne('/api/hello-world');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  // TODO: catch error test case
});
