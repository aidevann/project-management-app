import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from '../models/task';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-list',
    template: `
    <div class="task-list">
      <task-item
        *ngFor="let task of tasks | async"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
    `   
})

export class TaskListComponent{
    @Input() filter: string;
    @Input() tasks: FirebaseListObservable<ITask[]>;

    @Output() remove = new EventEmitter(false);
    @Output() update = new EventEmitter(false);
}