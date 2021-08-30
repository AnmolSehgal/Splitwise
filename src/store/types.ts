export interface LoginState {
  loginFailed: boolean;
  isLoggedIn: boolean;
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

export interface PaymentInfo {
  settleStatus: boolean;
  paymentId: string;
  title: string;
  description: string;
  friend: string;
  friendUid?: string;
  paidBy: string;
  userAmount: number;
  totalAmount: number;
  friendAmount: number;
  date: Date;
  settleDate: Date | undefined;
}
