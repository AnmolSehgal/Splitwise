export interface InputComponentProps {
  type: string;
  name?: string;
  nameTouched?: boolean;
  dirtyName?: () => void;
  changeName?: (val: string) => void;

  email: string;
  emailTouched: boolean;
  dirtyEmail: () => void;
  changeEmail: (val: string) => void;

  password: string;
  passwordTouched: boolean;
  dirtyPassword: () => void;
  changePassword: (val: string) => void;

  confirmPassword?: string;
  confirmPasswordTouched?: boolean;
  dirtyConfirmPassword?: () => void;
  changeConfirmPassword?: (val: string) => void;

  onClick?: () => void;
  disabled: boolean;
}
