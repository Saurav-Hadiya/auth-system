interface UserSchema {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  verificationCode?: string;
  verificationCodeExpiresAt?: Date;
  verificationToken?: string;
  verificationTokenExpiresAt?: string;
}
