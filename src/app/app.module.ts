import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannarComponent } from './components/bannar/bannar.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FoodNearMeComponent } from './components/food-near-me/food-near-me.component';
import { CitiesNearMeComponent } from './components/cities-near-me/cities-near-me.component';
import { CountriesWithUberComponent } from './components/countries-with-uber/countries-with-uber.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupTypeComponent } from './components/signup-type/signup-type.component';
import { AppMarketingComponent } from './components/app-marketing/app-marketing.component';
import { InANushComponent } from './components/in-a-nush/in-a-nush.component';
import { TodayOfferComponent } from './components/today-offer/today-offer.component';
import { NewInFastFoodComponent } from './components/new-in-fast-food/new-in-fast-food.component';
import { LookingforSomethingElseComponent } from './components/lookingfor-something-else/lookingfor-something-else.component';



@NgModule({
  declarations: [
    AppComponent,
    BannarComponent,
    HeaderComponent,
    FoodNearMeComponent,
    CitiesNearMeComponent,
    CountriesWithUberComponent,
    FooterComponent,
    SignupTypeComponent,
    AppMarketingComponent,
    InANushComponent,
    TodayOfferComponent,
    NewInFastFoodComponent,
    LookingforSomethingElseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    CarouselModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
