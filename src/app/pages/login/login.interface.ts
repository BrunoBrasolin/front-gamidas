import { AuthConfig } from "angular-oauth2-oidc";

export const AuthCodeFlowConfig: AuthConfig = {
  issuer: 'https://localhost:5001',
  redirectUri: 'http://localhost:4200/login',
  clientId: 'gamidas-portal',
  responseType: 'code',
  showDebugInformation: true,
  scope: "openid profile",
  dummyClientSecret: "secret"
};
