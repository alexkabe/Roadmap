import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdPopoverTplcontent } from './popover/popover.component';
import { ScrollToBottomDirective2 } from './services/scrollService';
import { CardComponent } from './card/card.component';
import { CardUserComponent } from './cardUser/card-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DataBase } from './services/database';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/authentification/authService';
import { CanActivateTeamGuard } from './services/authentification/can-activate-team.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NgbdPopoverTplcontent,
    CardComponent,
    CardUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,

    NgxSpinnerModule,
  ],
  providers: [
    DataBase,
    ScrollToBottomDirective2,
    AuthService,
    CanActivateTeamGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
