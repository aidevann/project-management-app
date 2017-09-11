import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth';
import { RoutingModule } from '../common';


import { HomeDashboardComponent } from './components/home-dashboard';


@NgModule({
    declarations:[
        HomeDashboardComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HomeModule{

}
