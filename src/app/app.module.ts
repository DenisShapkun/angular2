import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { MyComponent } from './users/my/my.component';
import { UsersModule } from './users/users.module';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
