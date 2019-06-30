import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
import { HelloWorldService } from './services/hello-world.service';

const mockResponse = require('../../__mocks__/hello-world.json');

class MockHelloWorldService {
  getResponse(): Observable<any> {
    return of(mockResponse);
  }
}

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
    }).overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: HelloWorldService, useClass: MockHelloWorldService },
        ],
      },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
    console.log(app.response);
  });
});
