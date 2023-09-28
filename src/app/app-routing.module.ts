import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEVELOPER } from './team/team-data';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'developer', component: TeamComponent, data: DEVELOPER },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
