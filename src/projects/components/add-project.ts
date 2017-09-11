import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'add-project',
    styles: [
        require('./add-project.scss')
    ],
    template: `
        <div class="add-project container">
            <button class="btn btn-default"
                (click)="goBack()"> 
                <i class="fa fa-caret-left" aria-hidden="true"></i> Back
            </button>
            <form>
                <h3>Add Project</h3>
                <div class="col-md-6">
                   <div class="form-group">
                        <label>Project Name: </label>
                        <input type="text" />
                    </div> 
                </div>
                <div class="col-md-6">
                   <div class="form-group">
                        <label>Project Manager: </label>
                        <input type="text" />
                    </div> 
                </div>
                <button type="submit" class="btn btn-default">Submit</button>

                <div class="clearfix"></div>
            </form>
        </div>
    `
})

export class AddProjectComponent {

    constructor(private location: Location){} 

    goBack(): void{
        this.location.back();
    }
}
