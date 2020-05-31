import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(Routes),
    ],
    exports:[RouterModule]
})


export class AppRoutingModule { }