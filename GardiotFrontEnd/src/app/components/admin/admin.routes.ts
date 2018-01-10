import { RouterModule, Routes } from '@angular/router';


//Admin imports
import { AdminListUsersComponent } from './listusers.component';
import { AdminUserComponent } from './user.component';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard.component';


export const admin_routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'user', component: AdminUserComponent },
  { path: 'listusers', component: AdminListUsersComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];
