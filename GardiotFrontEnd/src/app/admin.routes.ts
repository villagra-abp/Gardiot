import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

//Profile
import { AdminProfileComponent } from './components/admin/adminprofile.component';
//Users
import { NewuserComponent } from './components/users/newuser/newuser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { AdminListUsersComponent } from './components/users/listusers/listusers.component';
//negocio
import { StatisticsComponent } from './components/admin/statistics.component';
import { AnalyticsComponent } from './components/admin/analytics.component';
//treatment
import { NewtreatmentComponent } from './components/treatments/newtreatment/newtreatment.component';
import { EdittreatmentComponent } from './components/treatments/edittreatment/edittreatment.component';
import { ListtreatmentComponent } from './components/treatments/listtreatment/listtreatment.component';
import { TreatmentComponent } from './components/treatments/treatment/treatment.component';
//product
import { NewproductComponent } from './components/products/newproduct/newproduct.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { ListproductComponent } from './components/products/listproduct/listproduct.component';
import { ProductComponent } from './components/products/product/product.component';
//feed
import { FeedComponent } from './components/feeds/feed/feed.component';
import { NewfeedComponent } from './components/feeds/newfeed/newfeed.component';
import { EditfeedComponent } from './components/feeds/editfeed/editfeed.component';
import { ListfeedComponent } from './components/feeds/listfeed/listfeed.component';
//newtreatmentsplants
import { NewtreatmentsplantsComponent } from './components/treatmentsplants/newtreatmentsplants/newtreatmentsplants.component';
//otros
import { AdminguardGuard } from "./components/admin/adminguard.guard";

export const admin_routes: Routes = [
  //Profile
  { path: 'profile', component: AdminProfileComponent, canActivate: [AdminguardGuard]},
  //negocio
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AdminguardGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AdminguardGuard] },
  //user
  { path: 'users', component: AdminListUsersComponent,  canActivate: [AdminguardGuard] },
  { path: 'edituser/:id', component: EdituserComponent,  canActivate: [AdminguardGuard] },
  { path: 'newuser', component: NewuserComponent,  canActivate: [AdminguardGuard] },
  //treatment
  { path: 'treatments', component: ListtreatmentComponent,  canActivate: [AdminguardGuard] },
  { path: 'treatment/:id', component: TreatmentComponent,  canActivate: [AdminguardGuard] },
  { path: 'edittreatment/:id', component: EdittreatmentComponent,  canActivate: [AdminguardGuard] },
  { path: 'newtreatment', component: NewtreatmentComponent,  canActivate: [AdminguardGuard] },
  //product
  { path: 'products', component: ListproductComponent,  canActivate: [AdminguardGuard] },
  { path: 'product/:id', component: ProductComponent,  canActivate: [AdminguardGuard] },
  { path: 'editproduct/:id', component: EditproductComponent,  canActivate: [AdminguardGuard] },
  { path: 'newproduct', component: NewproductComponent,  canActivate: [AdminguardGuard] },
  //feed
  { path: 'feeds', component: ListfeedComponent,  canActivate: [AdminguardGuard] },
  { path: 'feed/:id', component: FeedComponent,  canActivate: [AdminguardGuard] },
  { path: 'editfeed/:id', component: EditfeedComponent,  canActivate: [AdminguardGuard] },
  { path: 'newfeed', component: NewfeedComponent,  canActivate: [AdminguardGuard] },
  //newtreatmentsplants
  { path: 'newtreatmentsplants/:id', component: NewtreatmentsplantsComponent,  canActivate: [AdminguardGuard] },

  { path: '**', pathMatch: 'full', redirectTo: 'analytics' }
];
