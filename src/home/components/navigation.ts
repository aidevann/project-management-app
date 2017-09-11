import { Component, NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
    selector: 'navigation',
    styles:[
        require('./navigation.scss')
    ],
    template: `
     <div class="container">
        <nav class="navigation">
            <ul>
            <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/tasks" routerLinkActive="active">Tasks</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
     </div>
    `
})

export class NavigationComponent {

}