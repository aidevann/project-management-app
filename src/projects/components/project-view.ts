import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'project-view',
    styles:[
        require('./project-view.scss')
    ],
    template: `
        <div class="project-view container">
            <button class="btn btn-danger" 
                (click)="showAddProject()">
                Add New Project
            </button>
        </div>
    `
})

export class ProjectViewComponent{

    constructor(private router: Router){}

    showAddProject(): void{
        this.router.navigate(['/addproject']);
    }
}