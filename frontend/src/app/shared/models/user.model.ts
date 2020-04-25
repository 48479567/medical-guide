type roleUser = 'admin' | 'user';

export interface IUserId {
  username: string;
}

export interface ISignInRequest extends IUserId {
  password: string;
}

export interface ISignInResponse extends ISignInRequest {
  _id?: string;
  name: string;
  role: roleUser;
}

export interface ISignUpRequest extends ISignInRequest {
  name: string;
  role: roleUser;
}

export interface IUser extends ISignInResponse {
  createdAt?: string | number;
  updatedAt?: string | number;
}


