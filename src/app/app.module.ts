import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuperstarModule } from './superstar/superstar.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuperstarModule,
    AppRoutingModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
