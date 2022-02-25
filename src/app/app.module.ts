import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import  {FormsModule} from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component'

const appRoutes :Routes =[
  {path:'',component:TasksComponent},
  {path:'about',component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddComponent,
    AboutComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }