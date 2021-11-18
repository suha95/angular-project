import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormsComponent } from './forms/detail-forms/detail-forms.component';
import { FormsComponent } from './forms/forms.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FormsComponent, canActivate: [AuthGuard] },
  {
    path: 'forms/:name/:formId',
    component: DetailFormsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
