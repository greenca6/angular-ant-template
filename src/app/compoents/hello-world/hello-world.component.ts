import { Component, OnInit, TemplateRef } from '@angular/core';
import { HelloWorldService } from 'src/app/services/hello-world.service';
import { EventService } from 'src/app/services/event.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less']
})
export class HelloWorldComponent implements OnInit {
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
