import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/users/login.component";
import { LogoutComponent } from "./components/users/logout.component";
import { RegisterComponent } from "./components/users/register.component";
import { IndexComponent } from "./components/index/index.component";
import { AuthGuard } from "./guards/authguard.guard"

const app_routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
