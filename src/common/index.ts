import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';
import { HomeModule} from '../home';
import { TasksModule } from '../tasks';

import { HomeDashboardComponent } from '../home/components/home-dashboard';
import { TaskViewComponent } from '../tasks/components/task-view';
import { ProjectViewComponent } from '../projects/components/project-view';
import { AddProjectComponent } from '../projects/components/add-project';

const routes: Routes = [
   { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]},
   { path: 'tasks', component: TaskViewComponent, canActivate:[ AuthGuard]},
   { path: 'projects', component: ProjectViewComponent, canActivate: [AuthGuard]},
   { path: 'addproject', component: AddProjectComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
    ],
    imports: [ 
        RouterModule.forChild(routes),
        HomeModule,
        TasksModule
    ],
    exports: [ 
        RouterModule
    ]
})
export class RoutingModule{

}