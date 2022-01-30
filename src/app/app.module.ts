import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTypePipe } from './core/pipes/add-type-pipe';
import { ToIdPipe } from './core/pipes/to-id.pipe';
import { NameListComponent } from './nameList/name.list.component';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
    declarations: [AppComponent, PeopleComponent, ToIdPipe, PlanetComponent, NameListComponent, AddTypePipe],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
