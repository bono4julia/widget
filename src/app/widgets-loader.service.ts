import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { WidgetsResponse } from './models/widgets-response';

@Injectable()
export class WidgetsLoaderService {

  constructor(
    private http: HttpClient
  ) { }

  getWidgets() {/*
    return [{
      component: WidgetAComponent,
      data: null
    },{
      component: WidgetBComponent,
      data: null
    },{
      component: WidgetCComponent,
      data: null
    }];*/

    return this.http.get<WidgetsResponse>('assets/widgets.json')
      .toPromise()
  }
}
