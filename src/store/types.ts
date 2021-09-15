import { FriendState } from "./reducers/friendsReducer";

export interface LoginState {
  loading: boolean;
  isLoggedIn: boolean;
}

export interface SignUpState {
  signUpFailed: boolean;
  isLoader: boolean;
}

export interface ErrorState {
  showError: boolean;
  errorMessage: string;
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
  friends: FriendState;
  loader: LoaderState;
  error: ErrorState;
}

export interface ExpenseInfo {
  settleStatus: boolean;
  expenseId: string;
  title: string;
  description: string;
  payerUID: string;
  payerAmount: number;
  totalAmount: number;
  friendAmount: number;
}

export interface UserData {
  uid: string;
  userName: string;
  email: string;
  friends: Friend[];
}

export interface Friend {
  userName: string;
  isVerified: boolean;
  paymentDetails: ExpenseInfo[];
  friendUID: string;
}

export interface AddExpenseInterface {
  friendUID: string;
  payerUID: string;
  userUID: string;
  expenseId: string;
  title: string;
  description: string;
  payerAmount: number;
  totalAmount: number;
  friendAmount: number;
  settleStatus: boolean;
}
export interface LoaderState {
  isLoader: boolean;
  friendListLoader: boolean;
}
