import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Widget } from './models/widget';
import { ImportService } from './import.service';
import { WidgetsResponse } from './models/widgets-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  apiUrl: string;
  public data: Array<any>;

  constructor(elRef: ElementRef, service: ImportService){
    this.apiUrl = elRef.nativeElement[0].value;
    console.log(this.apiUrl);
  }

  ngOnInit() {
    // this.data = this.service.getData(this.apiUrl);
  }

  title = 'app';

  widgetsData: WidgetsResponse = {
    
    widgets: [{
      name: 'widget-a',
      data: null
    }, {
      name: 'widget-b',
      data: null
    }, {
      name: 'widget-c',
      data: null
    },
    {
      name: 'widget-c',
      data: null
    }
  ],

    data: null
  }
}
