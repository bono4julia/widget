import { Injectable, QueryList, ComponentFactoryResolver } from '@angular/core';

import { WidgetHostDirective } from './widget-host.directive';

import { Widget } from './models/widget';
import { WidgetsResponse } from './models/widgets-response';

import { widgetsDictionary } from './consts/widgets-dictionary';

@Injectable()
export class WidgetsBuilderService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  build(widgetHosts: QueryList<WidgetHostDirective>, widgets: Widget[]) {

    widgetHosts.forEach((widgetHost, index) => {

      const widgetItem = widgets[index];
      const component = widgetsDictionary[widgetItem.name]
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const viewContainerRef = widgetHost.viewContainerRef;

      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      
      (<Widget>componentRef.instance).data = widgetItem.data;
    })
  }
}
