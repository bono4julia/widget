import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WidgetsResolverService } from './widgets-resolver.service';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    resolve: {
      widgets: WidgetsResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}