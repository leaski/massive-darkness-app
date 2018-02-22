import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonstersListComponent } from './monsters/monsters-list/monsters-list.component';
import { MonsterService } from './monsters/monsters.service';


@NgModule({
  declarations: [
    AppComponent,
    MonstersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MonsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
