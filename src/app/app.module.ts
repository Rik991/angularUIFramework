import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
import { CardComponent } from './main-components/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, UsersComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
