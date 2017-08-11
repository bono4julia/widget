import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Widget } from './models/widget';
import { WidgetsResponse } from './models/widgets-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    }],

    data: null
  }
}
