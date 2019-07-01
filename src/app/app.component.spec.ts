import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NzMessageService } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { HelloWorldService } from './services/hello-world.service';
import { EventService } from './services/event.service';

const mockResponse = require('../../__mocks__/hello-world.json');

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgZorroAntdModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(TestBed.get(HelloWorldService), 'getResponse').and.returnValue(of(mockResponse));
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should display a message if the API returns an error', () => {
    const messageSpy = spyOn(TestBed.get(NzMessageService), 'create');
    const events = TestBed.get(EventService);
    events.publish(EventService.API_REQ_FAILURE, { status: 500, statusText: 'Server Error' });
    fixture.detectChanges();
    expect(messageSpy).toHaveBeenCalled();
  });
});
