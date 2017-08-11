import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { WidgetsResponse } from './models/widgets-response';

import { WidgetsLoaderService } from './widgets-loader.service';

@Injectable()
export class WidgetsResolverService implements Resolve<WidgetsResponse> {

  constructor(
    private widgetsLoaderService: WidgetsLoaderService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<WidgetsResponse> {
    return this.widgetsLoaderService.getWidgets();
  }
}