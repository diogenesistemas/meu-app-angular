import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { AppRoutingModule } from './app-routing.module';
import { EchoComponent } from './components/echo/echo.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EchoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
