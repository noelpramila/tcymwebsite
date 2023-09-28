import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { StrategyComponent } from './strategy/strategy.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ContactComponent } from './contact/contact.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ServicesComponent } from './services/services.component';
import { DescriptionSlicerPipe } from './services/pipe/description-slicer.pipe';
import { ServicesFilterPipe } from './services/pipe/services-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
    HeaderComponent,
    TeamComponent,
    StrategyComponent,
    HeroSectionComponent,
    ContactComponent,
    MetricsComponent,
    ServicesComponent,
    DescriptionSlicerPipe,
    ServicesFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
