import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/components/account/account.component';
import { AcuteSinusitusComponent } from 'src/components/acute-sinusitus/acute-sinusitus.component';
import { AdmindashboardComponent } from 'src/components/admindashboard/admindashboard.component';
import { BiteLymeDiseaseComponent } from 'src/components/bite-lyme-disease/bite-lyme-disease.component';
import { IngrownToenailComponent } from 'src/components/ingrown-toenail/ingrown-toenail.component';
import { InnerdashboardComponent } from 'src/components/innerdashboard/innerdashboard.component';
import { LandingComponent } from 'src/components/landing/landing.component';
import { PathwaysComponent } from 'src/components/pathways/pathways.component';
import { PlantarCutaneousWartsComponent } from 'src/components/plantar-cutaneous-warts/plantar-cutaneous-warts.component';
import { SimplifiedDentalPainComponent } from 'src/components/simplified-dental-pain/simplified-dental-pain.component';
import { SmokingCessationComponent } from 'src/components/smoking-cessation/smoking-cessation.component';
import { UserdashboardComponent } from 'src/components/userdashboard/userdashboard.component';
import { UsersComponent } from 'src/components/users/users.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'inner-dashboard',
    component: InnerdashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-dashboard',
    component: AdmindashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'pathways', component: PathwaysComponent, canActivate: [AuthGuard] },
  {
    path: 'Smoking-Cessation',
    component: SmokingCessationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Ingrown-Toenail',
    component: IngrownToenailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Acute-Sinusitus',
    component: AcuteSinusitusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Bite-Lyme-Disease',
    component: BiteLymeDiseaseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Plantar-Cutaneous-Warts',
    component: PlantarCutaneousWartsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Simplified-Dental-Pain',
    component: SimplifiedDentalPainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-dashboard',
    component: UserdashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
