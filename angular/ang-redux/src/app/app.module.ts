import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from "./reducer";
import { jediListReducer } from './jedi-list.reducer';
import { JediListComponent } from './jedi-list.component';
@NgModule({
  declarations: [
    AppComponent, JediListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      counter: counterReducer,
      jediList: jediListReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
