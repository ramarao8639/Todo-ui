import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';
//welcome
const routes: Routes = [
{path:'',component: LoginComponent}, //canActivate,RouteGuard
{path:'login',component: LoginComponent}, //canActivate,RouteGuard
{path:'welcome/:name',component: WelcomeComponent,canActivate:[RouteGuardService]},
{path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
{path:'logout',component: LogoutComponent,canActivate:[RouteGuardService]},
{path:'todos/:id',component: TodoComponent,canActivate:[RouteGuardService]},
{path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
