import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedmenuComponent } from './fixedmenu/fixedmenu.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DescComponent } from './desc/desc.component';
import { BodynewsComponent } from './bodynews/bodynews.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedmenuComponent,
    BannerComponent,
    FooterComponent,
    IntroductionComponent,
    DescComponent,
    BodynewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
