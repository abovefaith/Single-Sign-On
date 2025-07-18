import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',

  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sso-app';

  private oauthService = inject(OAuthService);

  constructor() {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    // Logic for login
    this.oauthService.initImplicitFlow();
    console.log('Login button clicked');
  }

  logout() {
    // Logic for logout
    this.oauthService.logOut();
    console.log('Logout button clicked');
  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

  // get token(){
  //   let claims: any = this.oauthService.getIdentityClaims();
  //   console.log(claims);
  //   return claims ? JSON.stringify(claims) : null;
  // }


  // get token(){
  //   if (!this.oauthService.hasValidAccessToken()) {
  //     console.log('User is not authenticated');
  //     return null;
  //   }
  //   let claims: any = this.oauthService.getIdentityClaims();
  //   console.log(claims);
  //   return claims ? JSON.stringify(claims) : null;
  // }
}
