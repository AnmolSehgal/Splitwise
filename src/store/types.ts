export interface LoginState {
  loginFailed: boolean;
}

export interface SignUpState {
  signUpFailed: boolean;
}

export interface ProfileObject {
  name?: string;
  image?: File | undefined;
  oldPassword?: string;
  newPassword?: string;
  phoneNumber?: string;
  email?: string;
}

export interface ProfileStateObject {
  name: string;
  image: string;
  phoneNumber: string;
  email: string;
}

export interface GlobalState {
  signIn: LoginState;
  signUp: SignUpState;
  profile: ProfileStateObject;
}
