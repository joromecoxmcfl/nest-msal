import { Injectable } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

const clientID = 'b2d0c8ff-64e4-4729-b343-2358bef94b0d';
const tenantID = 'c1ba9c93-9276-444a-ae3e-d2e886e257b6';

/**
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
      clientID,
    });
  }

  async validate(data) {
    console.log(data);
    return data;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
