import { Component, Attribute } from '@angular/core';

@Component({
    selector: 'date-now',
    template: `
        <div style="padding-bottom:15px;"> 
            <span style="font-size:12px;">{{date}}</span>
        </div>
     `
})

export class DateComponent{
    private date;
    private format;
    constructor(@Attribute("format") format) { 
        this.format = format;
        this.date =  new Date(); 
    } 
}




