import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';
import { WhyFireComponent } from './why-fire/why-fire.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BoardsComponent } from './boards/boards.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BoardsService } from './Services/boards.service';
import { AccessoriesService } from './Services/accessories.service';
import { DetailService } from './Services/detail.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: 'ShoppingCart/:id/:submit', component: CartComponent},
  { path: 'Boards', component: BoardsComponent},
  { path: 'Accessories', component: AccessoriesComponent},
  { path: 'WhyFire', component: WhyFireComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'ContactUs', component: ContactUsComponent},
  { path: 'TermAndConditions', component: TermsConditionsComponent},
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent},
  { path: 'PersonalDetail', component: DetailComponent},
  { path: 'PersonalDetail/:id/:item', component: DetailComponent},
  { path: 'PaymentDetail/:id/:item', component: PaymentComponent},
  { path: 'Admin', redirectTo: '/Login', pathMatch: 'full'},
  { path: '**', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    DetailComponent,
    PaymentComponent,
    WhyFireComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,
    TermsConditionsComponent,
    ContactUsComponent,
    BoardsComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AdminModule
  ],
  providers: [BoardsService,AccessoriesService,DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
