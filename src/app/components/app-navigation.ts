import { Component, NgModule, Input }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-navigation',
    styles:[
        require('./app-navigation.scss')
    ],
    template: `
     <div class="container">
        <nav class="navigation"
        *ngIf="authenticated">
            <ul>
            <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/tasks" routerLinkActive="active">Tasks</a></li>
            <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
     </div>
    `
})

export class AppNavigationComponent {
    @Input() authenticated: boolean;
}