import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/users/login.component";
import { LogoutComponent } from "./components/users/logout.component";
import { RegisterComponent } from "./components/users/register.component";
import { DetailComponent } from "./components/users/detail.component";
import { ProfileComponent } from "./components/users/profile.component";

//Admin imports
import { AdminListUsersComponent } from './components/admin/listusers.component';
import { AdminUserComponent } from './components/admin/user.component';
import { AdminComponent } from './components/admin/admin.component';

import { admin_routes } from "./components/admin/admin.routes";


const app_routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdminComponent, children: admin_routes },
  { path: 'detail', component: DetailComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
