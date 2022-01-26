import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { CanActivateTeamGuard } from './services/authentification/can-activate-team.guard';

const routes: Routes = [
  {
    path: 'team',
    component: MapComponent,
    canActivate: [CanActivateTeamGuard]
  },
  {
    path: '**',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
