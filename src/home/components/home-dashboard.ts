import { Component, Attribute } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';


@Component({
    selector: 'home-dashboard',
    styles:[
        require('./home-dashboard.scss')
    ],
    template: `
        <div class="container dashboard-container">
            <span class="date">{{date}}</span>
            <h4>Hello {{name}}!</h4>
            <em>{{email}}</em>
            <article>
                <p>This is your home dashboard.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </article>
        </div>
     `
})
export class HomeDashboardComponent{ 
    private date;
    private format;
    constructor (private auth: AuthService, @Attribute("format") format ) {
        this.date = new Date();
        this.format = format;
    }
    photo = this.auth.userPhotoLink;
    email = this.auth.userEmail;
    name = this.auth.userDisplayName;
}


