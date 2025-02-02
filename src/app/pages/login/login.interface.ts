import { AuthConfig } from "angular-oauth2-oidc";

export const AuthCodeFlowConfig: AuthConfig = {
  issuer: 'https://api.gamidas.dev.br/identity-hub',
  redirectUri: 'https://gamidas.dev.br/login',
  clientId: 'gamidas-portal',
  responseType: 'code',
  showDebugInformation: true,
  scope: "openid profile",
  dummyClientSecret: "secret"
};
