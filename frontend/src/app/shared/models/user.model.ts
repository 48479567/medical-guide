export interface IUserId {
  username: string;
}

export interface ISignInRequest extends IUserId {
  password: string;
}

export interface ISignInResponse extends ISignInRequest {
  _id?: string;
  name: string;
  role: 'admin' | 'user';
}

export interface ISignUpRequest extends ISignInRequest {
  name: string;
  role: 'admin' | 'user';
}

export interface IUser extends ISignInResponse {
  createdAt?: string | number;
  updatedAt?: string | number;
}


