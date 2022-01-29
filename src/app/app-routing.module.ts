import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
    {
        path: '',
        component: PeopleComponent,
    },
    {
        path: 'test',
        component: PlanetComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
