import { ModalService } from './services/modal.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackgroundComponent } from './components/background/background.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { modalDirective } from './components/modal/modal.directive';
import { DataService } from './services/data.service';
import { NavbarService } from './services/navbar.service';
import { SkillsTiltDirective } from './components/skills/skills-tilt.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WorksComponent,
    SkillsComponent,
    SkillsTiltDirective,
    ContactComponent,
    HomeComponent,
    BackgroundComponent,
    ModalComponent,
    modalDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    CarouselModule,
  ],
  providers: [DataService, ModalService, NavbarService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
