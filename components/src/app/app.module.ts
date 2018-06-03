import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { DyncomponentComponent } from './dyncomponent/dyncomponent.component';
import { ChildComponent } from './dyncomponent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    DyncomponentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ChildComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
