import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/manage/login.component";
import { LogoutComponent } from "./components/manage/logout.component";
import { RegisterComponent } from "./components/manage/register.component";
import { DetailComponent } from "./components/user/detail.component";
import { ProfileComponent } from "./components/user/profile.component";
import { EditProfileComponent } from "./components/user/editprofile.component";
import { ConfirmationComponent } from "./components/manage/confirmation.component";
import { ResendComponent } from "./components/manage/resend.component";
import { LibraryComponent } from "./components/user/library.component";
import { CalendarComponent } from "./components/user/calendar.component";
import { PlantComponent } from "./components/user/plant.component";



//Oauth
import { OauthConfirmationComponent } from './components/manage/oauthconfirmation.component';
//Admin imports
import { AdminListUsersComponent } from './components/admin/listusers.component';
import { AdminUserComponent } from './components/admin/user.component';
import { AdminComponent } from './components/admin/admin.component';


//GardenComponent
import { GardenComponent } from './components/user/garden.component';
import { EditGardenComponent } from './components/user/editgarden.component';

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
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthguardGuard] },
  { path: 'garden', component: GardenComponent, canActivate: [AuthguardGuard] },
  { path: 'editgarden', component: EditGardenComponent, canActivate: [AuthguardGuard] },
  { path: 'plants', component: LibraryComponent, canActivate: [AuthguardGuard] },
  { path: 'plant', component: PlantComponent, canActivate: [AuthguardGuard] }, // eliminar una vez linkado a libreria
  { path: 'plant/:id', component: PlantComponent, canActivate: [AuthguardGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthguardGuard] },
  { path: 'confirmation/:key', component: ConfirmationComponent },
  { path: 'oauthconfirmation/:key', component: OauthConfirmationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'detail' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
