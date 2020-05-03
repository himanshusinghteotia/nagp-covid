import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LoginComponent } from './login/login.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateDistrictComponent } from './dashboard/state-district/state-district.component';
import { AuthGuard } from './core/services/auth.guard';
import { Role } from './core/models/role';

//Routing Array
const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "addnews", component: AddNewsComponent, canActivate: [AuthGuard], data: { roles: Role.Admin } },
  { path: "viewnews", component: ViewNewsComponent },
  { path: "precautions", component: PrecautionsComponent },
  { path: ":state", component: StateDistrictComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }