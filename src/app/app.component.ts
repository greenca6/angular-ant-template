import { Component, TemplateRef } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { routes, AppRoute } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  appRoutes: AppRoute[] = routes.filter(r => r.isSidebarItem);
  currentRoute: string = '';

  constructor(private router: Router) {
    router.events.subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url.slice(1);
      }
    });
  }
}
