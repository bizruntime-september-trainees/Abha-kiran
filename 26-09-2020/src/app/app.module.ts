import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreefvComponent } from './treefv/treefv.component';

@NgModule({
  declarations: [
    AppComponent,
    TreefvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTreeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
