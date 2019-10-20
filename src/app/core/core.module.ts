import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AdminGuard } from './admin-guard.service';
import { CanReadGuard } from './can-read-gurd.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, AdminGuard, CanReadGuard]
})
export class CoreModule { }