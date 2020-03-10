import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { AddComponent } from './add/add.component';

const route : Routes = [
  {path : 'add', component : AddComponent},
  {path : '', redirectTo : 'add', pathMatch : 'full'},
  {path : '*', redirectTo : 'add', pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
