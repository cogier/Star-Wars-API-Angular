import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToIdPipe } from './core/pipes/to-id.pipe';
import { PeopleComponent } from './people/people.component';

@NgModule({
    declarations: [AppComponent, PeopleComponent, ToIdPipe],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
