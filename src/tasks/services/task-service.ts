import 'rxjs/add/observable/merge';
import 'rxjs/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../../auth';
import { ITask, Task } from '../models/task';
import { IDoneTask, DoneTask } from '../models/task-done';

@Injectable()
export class TaskService{
    visibleTasks$: Observable<ITask[]>;

    private filter$: ReplaySubject<any> = new ReplaySubject(1);
    private filteredTasks$: FirebaseListObservable<ITask[]>;
    private tasks$: FirebaseListObservable<ITask[]>; 

    //task-done
    visibleTasks1$: Observable<IDoneTask[]>; 

    private filter1$: ReplaySubject<any> = new ReplaySubject(1);
    private filteredTasks1$: FirebaseListObservable<IDoneTask[]>;
    private tasks1$: FirebaseListObservable<IDoneTask[]>;

    constructor(af: AngularFire, auth: AuthService){
        const path = `/tasks/${auth.id}`;
        this.tasks$ = af.database.list(path);

        this.filteredTasks$ = af.database.list(path, {query: {
            orderByChild: 'completed',
            equalTo: this.filter$
        }});

        this.visibleTasks$ = this.filter$
            .switchMap(filter => filter === null ? this.tasks$ : this.filteredTasks$);
        
        //task-done 
        const path1 = `/tasksdone/${auth.id}`;
        this.tasks1$ = af.database.list(path1);
        this.filteredTasks1$ = af.database.list(path1, {query: {
                orderByChild: 'completed',
                equalTo: this.filter1$
        }});
        this.visibleTasks1$ = this.filter1$
            .switchMap(filter_d => filter_d === null ? this.tasks1$ : this.filteredTasks1$);

}
    filterTasks(filter: string): void{
        switch(filter){
            case 'false':
                this.filter$.next(false);
                break;
            case 'true':
                this.filter$.next(true);
                break;
            default:
                this.filter$.next(null);
                break;
        }
    }
    
     //task-done 
    filterDoneTasks(filter1: string): void{
            switch (filter1) {
                case 'false':
                    this.filter1$.next(false);
                    break;
                case 'true':
                    this.filter1$.next(true);
                default:
                    this.filter1$.next(null);
                    break;
            }
    }

    createTask(title: string): firebase.Promise<any>{
        return this.tasks$.push(new Task(title));
    }
    removeTask(task: ITask): firebase.Promise<any>{
        return this.tasks$.remove(task.$key);
    }
    updateTask(task: ITask, changes: any): firebase.Promise<any>{
       return this.tasks$.update(task.$key, changes);
    }

    //task-done 
    createDoneTask(title: string): firebase.Promise<any>{
        return  this.tasks1$.push(new DoneTask(title));
    }
    removeDoneTask(td: IDoneTask): firebase.Promise<any>{
        return this.tasks1$.remove(td.$key);
    }
    updateDoneTask(td: IDoneTask, changes1): firebase.Promise<any>{
        return this.tasks1$.update(td.$key, changes1);
    }


}   