import { Component, Input, AfterViewInit, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';

import { WidgetsResponse } from '../models/widgets-response';

import { WidgetHostDirective } from '../widget-host.directive';

import { WidgetsBuilderService } from '../widget-builder.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements AfterViewInit {

  @Input() widgetsData: WidgetsResponse;

  @ViewChildren(WidgetHostDirective) widgetHosts: QueryList<WidgetHostDirective>;

  constructor(
    private widgetsBuilderService: WidgetsBuilderService
  ) { }

  ngAfterViewInit() {
    this.widgetsBuilderService.build(this.widgetHosts, this.widgetsData.widgets);
  }
}
