import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProjectViewComponent } from './components/project-view';
import { AddProjectComponent } from  './components/add-project';

@NgModule({
    declarations:[
        ProjectViewComponent,
        AddProjectComponent
    ],
    imports:[
        FormsModule
    ],
    providers: [
    ]
})

export class ProjectsModule{ }