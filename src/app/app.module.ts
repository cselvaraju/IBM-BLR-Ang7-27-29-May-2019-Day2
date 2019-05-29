import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ActorlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
