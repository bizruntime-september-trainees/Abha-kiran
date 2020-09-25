import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsec1Component } from './myContainer/textsec1/textsec1.component';
import { Textsec2Component } from './myContainer/textsec2/textsec2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; 
//collapse 
import { CollapseModule } from 'ngx-bootstrap/collapse';
//timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushspliceComponent } from './pushsplice/pushsplice.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ButtonmaterialComponent } from './buttonmaterial/buttonmaterial.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './appServices/designutility.service';



const appRoutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home', component: HomeComponent},    
  {path:'login', component: LoginComponent},
  {path:'about', component: AboutComponent}, 
  {path:'contact', component: ContactComponent},
  {path:'buy-products', component: ParentComponent},
  {path:'products', component: ProductsComponent ,children:[
    
    {path:'laptop', component: LaptopComponent}, 
    {path:'mobile', component: MobileComponent},
    {path:'tv', component: TvComponent},
    {path:'washingmachine', component: WashingMachineComponent},
  ]},
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({ 
  declarations: [
    AppComponent,
    MyContainerComponent, 
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component,
    InterpolationComponent,
    PropertybindingComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgForComponent,
    PushspliceComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ButtonmaterialComponent,
    Card2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MaterialModule
    
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
