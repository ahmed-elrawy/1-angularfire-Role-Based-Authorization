import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberPageComponent } from '../components/subscriber-page/subscriber-page.component';
import { CanReadGuard } from '../core/can-read-gurd.service';
import { AdminGuard } from '../core/admin-guard.service';
import { SuperSecretComponent } from '../components/super-secret/super-secret.component';

const routes: Routes = [
  { path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
  { path: 'content', component: SubscriberPageComponent, canActivate: [CanReadGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
