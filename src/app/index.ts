import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth';
import { FirebaseModule } from '../firebase';

import { RoutingModule } from '../common';
import { HomeModule } from '../home';
import { TasksModule } from '../tasks';
import { ProjectsModule } from '../projects';

import { AppComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';
import { AppNavigationComponent } from './components/app-navigation';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    AuthModule,
    FirebaseModule,
    RoutingModule,
    HomeModule,
    ProjectsModule
  ]
})

export class AppModule {}
