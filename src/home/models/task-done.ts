/* tslint: disable:no-string-literal */

export interface IDoneTask{
    $key?: string;
    completed: boolean;
    createdAt: number;
    title: string;
}

export class DoneTask implements IDoneTask{
    completed: boolean = false;
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    title: string;
    
    constructor(title: string) {
        this.title = title;
    }
}