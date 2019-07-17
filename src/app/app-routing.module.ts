import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HelloWorldComponent } from './compoents/hello-world/hello-world.component';


export declare interface AppRoute extends Route {
  isSidebarItem?: boolean,
  sidebarLabel?: string,
  sidebarIcon?: string,
}

export const routes: AppRoute[] = [
  {
    path: 'hello-world',
    component: HelloWorldComponent,
    isSidebarItem: true,
    sidebarLabel: 'Hello World',
    sidebarIcon: 'line-chart',
  },
  { path: '', pathMatch: 'full', redirectTo: 'hello-world' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
