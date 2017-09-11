import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item-done',
    styles:[
        require('./task-list-done.scss')
    ],
    template: `
     <div class="task-list-done">
        {{td.title}}
        <i class="fa fa-trash" aria-hidden="true"
            (click)="removedonetask.emit()"></i>
     </div>
    `
})

export class TaskItemDoneComponent {
    @Input() td: IDoneTask;
    @Output() removedonetask = new EventEmitter();
}