import { Component, TemplateRef, ViewChild } from '@angular/core';
import { HelloWorldService } from './services/hello-world.service';
import { EventService } from './services/event.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  loading: boolean = true;
  response = [];

  constructor(
    private helloWorldService: HelloWorldService,
    private events: EventService,
    private messageService: NzMessageService
  ) {
  }

  ngOnInit() {
    this.events.get(EventService.API_REQ_FAILURE).subscribe(err => {
      this.loading = false;
      this.messageService.create('error', `API Error: ${err.status} - ${err.statusText}`);
    });

    this.helloWorldService.getResponse().subscribe(r => {
      this.response = r;
      this.loading = false;
    });
  }
}
