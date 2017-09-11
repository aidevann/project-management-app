import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../services/task-service';

@Component({
    selector: 'task-view',
    styles:[
        require('./task-view.scss')
    ],
    template:`

    <div class="container task-view">
        <div class="row">
            <div class="col-md-4">
                <h4>Add Tasks</h4>
                <task-form (createTask)="taskService.createTask($event)"></task-form>
            </div>
            <div class="col-md-4">
                <h4>Tasks List</h4>
                <task-list
                    [filter] = "filter | async"
                    [tasks]  = "taskService.visibleTasks$"
                    (remove) = "taskService.removeTask($event)"
                    (update) = "taskService.updateTask($event.task, $event.changes)"
                ></task-list>
            </div>
            <div class="col-md-4">
                <h4>Tasks Done</h4>
                <task-list-done
                    [filter1]        = "filter1 | async"
                    [taskdone]       = "taskService.visibleTasks1$"
                    (removedonetask) = "taskService.removeDoneTask($event)"   
                    (updatedonetask) = "taskService.updateDoneTask($event.td, $event.changes1)"
                    >
                </task-list-done>
            </div>
        </div>
    </div>`
})
export class TaskViewComponent{
    filter: Observable<any>;
    filter1: Observable<any>;
    
    constructor(public route: ActivatedRoute, public taskService: TaskService){
        this.filter = route.params
            .pluck('completed')
            .do((value: string) => taskService.filterTasks(value));
        
        this.filter1 = route.params
            .pluck('completed')
            .do((value: string) => taskService.filterDoneTasks(value));
            
    }
}
