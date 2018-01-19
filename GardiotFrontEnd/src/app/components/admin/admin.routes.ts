import { RouterModule, Routes } from '@angular/router';


//Admin imports
import { AdminListUsersComponent } from './listusers.component';
import { AdminUserComponent } from './user.component';
import { AdminComponent } from './admin.component';
import { AdminEditUserComponent } from './edituser.component';
import { AdminDashboardComponent } from './dashboard.component';

import { AdminguardGuard } from "./adminguard.guard";


export const admin_routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AdminguardGuard] },
  { path: 'user', component: AdminUserComponent, canActivate: [AdminguardGuard] },
  { path: 'listusers', component: AdminListUsersComponent, canActivate: [AdminguardGuard] },
  { path: 'edituser/:id', component: AdminEditUserComponent, canActivate: [AdminguardGuard] },

  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];
