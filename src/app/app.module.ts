import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { AddUpdateCampingComponent } from './pages/mang-Camp/add-update-camping/add-update-camping.component';
import { ListCampingComponent } from './pages/mang-Camp/list-camping/list-camping.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoupUpInfoComponent } from './pages/mang-Camp/poup-up-info/poup-up-info.component';
import { DeleteAllTabComponent } from './pages/general/delete-all-tab/delete-all-tab.component';
import { ListCampComponent } from './pages/participations/list-camp/list-camp.component';
import { DetaileOneCampingPartComponent } from './pages/participations/detaile-one-camping-part/detaile-one-camping-part.component';
import { AddParticipationPoupupComponent } from './pages/participations/add-participation-poupup/add-participation-poupup.component';
import { RecuPaymentComponent } from './pages/participations/recu-payment/recu-payment.component';
import {NgxPrintModule} from 'ngx-print';
import { AccuComponent } from './pages/accu/accu.component';
import { RegesterComponent } from './pages/auth/regester/regester.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SigninComponent,
    DashboardDefaultComponent,
    SimplePageComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    AddUpdateCampingComponent,
    ListCampingComponent,
    PoupUpInfoComponent,
    DeleteAllTabComponent,
    ListCampComponent,
    DetaileOneCampingPartComponent,
    AddParticipationPoupupComponent,
    RecuPaymentComponent,
    AccuComponent,
    RegesterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPrintModule
    //HomePageComponent
    //BreadcrumbsComponent
    //SigninComponent,
    //BasicLoginComponent,
    //DashboardDefaultComponent
  ],

  entryComponents: [PopupComponent,AddUpdateCampingComponent,PoupUpInfoComponent,DeleteAllTabComponent,AddParticipationPoupupComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
