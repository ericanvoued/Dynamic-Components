import { Component, OnInit, ViewChild, ViewContainerRef,ComponentFactoryResolver,ComponentRef } from '@angular/core';
import {ChildComponent} from './child/child.component'


@Component({
  selector: 'app-dyncomponent',
  templateUrl: './dyncomponent.component.html',
  styleUrls: ['./dyncomponent.component.css']
})
export class DyncomponentComponent implements OnInit {
  @ViewChild('dyncomponent',{read:ViewContainerRef})
  dyncomponent:ViewContainerRef;

  comp1:ComponentRef<ChildComponent>

  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log('动态创建组建实例。。。')
    const childComp = this.resolver.resolveComponentFactory(ChildComponent)
    this.comp1 = this.dyncomponent.createComponent(childComp);

  }

  changeTitle(){
    this.comp1.instance.title = 'test'
  }


}
