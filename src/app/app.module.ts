import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
// import { element } from  '@angular/material/place';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from  '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { HeaderComponent } from './components/header/header.component';
import { AccessButtonsComponent } from './components/access-buttons/access-buttons.component';
import { SideComponent } from './components/side/side.component';

// Pages
import { LandingComponent } from './pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessButtonsComponent,
    SideComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Angular material
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
