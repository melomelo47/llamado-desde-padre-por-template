import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SelectornumericoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
