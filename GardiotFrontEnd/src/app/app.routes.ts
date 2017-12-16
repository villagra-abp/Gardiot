import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/users/login.component";
import { RegisterComponent } from "./components/users/register.component";

const app_routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'register' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
