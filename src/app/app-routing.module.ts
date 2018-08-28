import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
    { path: '', redirectTo: 'dash', pathMatch: 'full' },

        {
        path: 'nav',
        component: NavComponent
        },
        {
        path: 'dash',
        component: DashComponent
        },

];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
