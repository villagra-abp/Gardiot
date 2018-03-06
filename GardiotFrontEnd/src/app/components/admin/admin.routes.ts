import { RouterModule, Routes } from '@angular/router';


//Admin imports
//import { AdminListUsersComponent } from './listusers.component';
// import { AdminUserComponent } from './user.component';
import { AdminComponent } from './admin.component';
//import { AdminEditUserComponent } from './edituser.component';
//import { AdminDashboardComponent } from './dashboard.component';

import { StatisticsComponent } from './statistics.component';
import { AnalyticsComponent } from './analytics.component';
import { EmailComponent } from './email.component';
//import { UserdataComponent } from './userdata.component';
import { EventdataComponent } from './eventdata.component';
import { ToolComponent } from './tool.component';
import { InvoiceComponent } from './invoice.component';

import { AdminguardGuard } from "./adminguard.guard";


export const admin_routes: Routes = [
  //{ path: 'dashboard', component: AdminDashboardComponent, canActivate: [AdminguardGuard] },
  // { path: 'user', component: AdminUserComponent, canActivate: [AdminguardGuard] },
  // { path: 'listusers', component: AdminListUsersComponent, canActivate: [AdminguardGuard] },
  // { path: 'edituser/:id', component: AdminEditUserComponent, canActivate: [AdminguardGuard] },

  { path: 'analytics', component: AnalyticsComponent, canActivate: [AdminguardGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AdminguardGuard] },
  { path: 'email', component: EmailComponent, canActivate: [AdminguardGuard] },
  // { path: 'userdata', component: UserdataComponent, canActivate: [AdminguardGuard] },
  { path: 'eventdata', component: EventdataComponent, canActivate: [AdminguardGuard] },
  { path: 'tool', component: ToolComponent, canActivate: [AdminguardGuard] },
  { path: 'invoice', component: InvoiceComponent, canActivate: [AdminguardGuard] },

  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];
