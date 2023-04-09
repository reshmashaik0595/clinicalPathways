import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AdmindashboardComponent } from '../components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from '../components/userdashboard/userdashboard.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { LandingComponent } from '../components/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InnerdashboardComponent } from '../components/innerdashboard/innerdashboard.component';
import { AccountComponent } from '../components/account/account.component';
import { UsersComponent } from '../components/users/users.component';
import { PathwaysComponent } from '../components/pathways/pathways.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/services/auth.guard';
import { NgxLoaderSpinnerModule } from 'ngx-loader-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmokingCessationComponent } from 'src/components/smoking-cessation/smoking-cessation.component';
import { IngrownToenailComponent } from 'src/components/ingrown-toenail/ingrown-toenail.component';
import { AcuteSinusitusComponent } from 'src/components/acute-sinusitus/acute-sinusitus.component';
import { PlantarCutaneousWartsComponent } from 'src/components/plantar-cutaneous-warts/plantar-cutaneous-warts.component';
import { SimplifiedDentalPainComponent } from 'src/components/simplified-dental-pain/simplified-dental-pain.component';
import { BiteLymeDiseaseComponent } from 'src/components/bite-lyme-disease/bite-lyme-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    SidebarComponent,
    LandingComponent,
    InnerdashboardComponent,
    AccountComponent,
    UsersComponent,
    PathwaysComponent,
    SmokingCessationComponent,
    IngrownToenailComponent,
    AcuteSinusitusComponent,
    PlantarCutaneousWartsComponent,
    SimplifiedDentalPainComponent,
    BiteLymeDiseaseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoaderSpinnerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
