import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/users/login.component";
import { LogoutComponent } from "./components/users/logout.component";
import { RegisterComponent } from "./components/users/register.component";
import { DetailComponent } from "./components/users/detail.component";
import { ProfileComponent } from "./components/users/profile.component";
import { ConfirmationComponent } from "./components/users/confirmation.component";
import { ResendComponent } from "./components/users/resend.component";

//Admin imports
import { AdminListUsersComponent } from './components/admin/listusers.component';
import { AdminUserComponent } from './components/admin/user.component';
import { AdminComponent } from './components/admin/admin.component';

//GardenComponent
import { GardenComponent } from './components/garden/garden.component';

import { AuthguardGuard } from "./authguard.guard";

import { admin_routes } from "./components/admin/admin.routes";


const app_routes: Routes = [
  { path: 'resend', component: ResendComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdminComponent, children: admin_routes, canActivate: [AuthguardGuard] },
  { path: 'detail', component: DetailComponent, canActivate: [AuthguardGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthguardGuard] },
  { path: 'garden', component: GardenComponent, canActivate: [AuthguardGuard] },
  { path: 'confirmation/:key', component: ConfirmationComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
