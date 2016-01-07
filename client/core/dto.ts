export const BACK_END_ROUTE = '/api';
export interface BaseDto {
  _id?: any;
  createdBy?: any;
  createdAt?: number;
  updatedAt?: number;
}

export interface Contact extends BaseDto {
  email?: string;
  name?: string;
  website?: string;
  industry?: any;
  city?: any;
}

export interface Notification {
  type: string;
  data?: any;
}

export interface Country extends BaseDto {
  code?: string;
  name?: string;
}

export interface City extends BaseDto {
  code?: string;
  name?: string;
  country?: any;
}

export interface Industry extends BaseDto {
  code?: string;
  description?: string;
}

export interface AddressBookGroup extends BaseDto {
  name?: string;
  description?: string;
  city?: any;
  postcode?: any;
  streetName?: string;
  industry?: any;
  website?: string;
  bussinessNumber?: string;
  owner?: any;
  contacts?: any;
}

export interface AddressBookContact extends BaseDto {
  name?: string;
  description?: string;
  position?: string;
  contactNumber?: string;
  altContactNumber?: string;
  email?: string;
  website?: string;
  group?: any;
}

export interface AccountUser extends BaseDto {
  username?: string;
  password?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  alias?: string;
  birthday?: Date;
}

export interface AccountOrganization extends BaseDto {
  name?: string;
  domain?: string;
  description?: string;
  city?: any;
  postcode?: any;
  suburb?: string;
  industry?: any;
  bussinessNumber?: string;
  team?: number;
  web?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  plus?: string;
  dribble?: string;
  pinterest?: string;
}



export interface AccountOrganizationMember extends BaseDto {
  name?: string;
  email?: string;
  position?: string;
  contactNumber?: string;
  altContactNumber?: string;
  organization?: any;
  user?: any;
  role?: any;
}

export interface AccountMemberRole extends BaseDto {
  code?: string;
  name?: string;
  description?: string;
  grantDelete?: boolean;
  grantUpdate?: boolean;
  grantCreate?: boolean;
  grantRead?: boolean;
  grantInvitation?: boolean;
}

export interface SignUp extends BaseDto {
  organizationMember?: AccountOrganizationMember;
  organization?: AccountOrganization;
  user?: AccountUser;
}

export interface LogIn extends BaseDto {
  username: string;
  password: string;
}

export interface AuthenticationResponse {
  token?: any;
  init?: any;
}

export interface SalesLeadStatus extends BaseDto {
  code?: string;
  name?: string;
}

export interface SalesLead extends BaseDto {
  name?: string;
  status?: any;
  contract?: string;
  amount?: number;
  contact?: any;
}

export interface SalesLeadContact extends BaseDto {
  lead?: any;
  contact?: any;
}

export interface SalesLeadOrganization extends BaseDto {
  lead?: any;
  organization?: any;
}

export interface SalesLeadMemberRole extends BaseDto {
  code?: string;
  name?: string;
  description?: string;
  grantDelete?: boolean;
  grantUpdate?: boolean;
  grantCreate?: boolean;
  grantRead?: boolean;
  grantInvitation?: boolean;
}

export interface SalesLeadOrganizationMember extends BaseDto {
  leadOrganization?: any;
  member?: any;
}

export interface AuthorizationData {
  organizationMember?: AccountOrganizationMember;
  leadMember?: SalesLeadOrganizationMember;
}

export interface ModelOptions {
  additionalData?: any;
  complexSearch?: any;
  population?: any;
  projection?: any;
  regularExpresion?: boolean;
  distinct?: any;
  authorization?: AuthorizationData;
  requireAuthorization?: boolean;
  copyAuthorizationData?: boolean;
  specialAuthorizationDataSearch?: boolean;
}

