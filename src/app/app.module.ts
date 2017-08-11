import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetAComponent } from './widget-a/widget-a.component';
import { WidgetBComponent } from './widget-b/widget-b.component';
import { WidgetCComponent } from './widget-c/widget-c.component';

import { WidgetsBuilderService } from './widget-builder.service';
import { WidgetsLoaderService } from './widgets-loader.service';

import { ImportService } from './import.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetHostDirective,
    WidgetAComponent,
    WidgetBComponent,
    WidgetCComponent
  ],
  entryComponents: [
    WidgetAComponent,
    WidgetBComponent,
    WidgetCComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule/*,
    AppRoutingModule*/
  ],
  providers: [
    WidgetsLoaderService,
    WidgetsBuilderService,
    ImportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
