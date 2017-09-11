import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { TaskViewComponent } from './components/task-view';
import { TaskFormComponent } from './components/task-form';
import { TaskListComponent } from './components/task-list';
import { TaskItemComponent } from './components/task-item';
import { TaskListDoneComponent } from './components/task-list-done';
import { TaskItemDoneComponent } from './components/task-item-done';

import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskService } from './services/task-service';

@NgModule({
    declarations: [
        AutoFocusDirective,
        TaskViewComponent,
        TaskFormComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskListDoneComponent,
        TaskItemDoneComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        TaskService
    ]   
})

export class TasksModule{ }

export { TaskService };