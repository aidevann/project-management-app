import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../services/task-service';
import { ITask } from '../models/task';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item',
    styles:[
        require('./task-item.scss')
    ],
    template:
    `<div class="task-item">
        <i class="fa fa-check" aria-hidden="true"
           (click)="submitDoneTask()">
        </i>
        <i class="fa fa-pencil" aria-hidden="true"
            [class.selected] = "task === selectedTask"
            (click)="onSelect(task)">
        </i>
        <i class="fa fa-trash" aria-hidden="true"
            (click)="remove.emit()">
        </i><span>
      
        <div *ngIf="!(task===selectedTask)">
            {{task.title}}
        </div>
        <div *ngIf="task===selectedTask">
            <input [(ngModel)]="title"
            (keyup.enter)="enterKeyEditing()"
            placeholder="" />
            <i class="fa fa-floppy-o" aria-hidden="true"
            (click)="updateTask()"></i>
        </div>

    </span></div>
    `
})
export class TaskItemComponent{
    constructor(public taskService: TaskService){ }
    @Input()task: ITask;

    @Output() remove = new EventEmitter(false);
    @Output() update = new EventEmitter(false);
    @Output() createDoneTask = new EventEmitter(false);

    submitDoneTask(): void{
        this.taskService.createDoneTask(this.task.title);
        this.taskService.removeTask(this.task);
    }

    // For Edit Implementation
    editing: boolean = false;
    title: string = '';
    selectedTask: ITask;
    
    onSelect(task: ITask): void{
        this.editing = true;
        this.selectedTask = this.task;
        this.title = this.task.title;
    }
    
    // For Update Implementation
    enterKeyEditing(): void{
         if(this.editing){ 
            const title: string = this.title.trim();
            this.update.emit({title});
         }
    }
    updateTask(): void{
         if(this.editing){ 
            const title: string = this.title.trim();
            this.update.emit({title});
         }
    } 
    // stopEditing(): void{
    //     this.editing = false;
    // }

}