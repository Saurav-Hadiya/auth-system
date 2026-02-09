import mongoose from 'mongoose';
import { compare, hash } from 'bcrypt-ts';

const userSchema = new mongoose.Schema<UserSchema>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      typr: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: '',
    },
    verificationCodeExpiresAt: {
      type: Date,
    },
    verificationToken: {
      type: String,
      default: '',
    },
    verificationTokenExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  // check if password has been modified
  if (!this.isModified('password')) return;

  // hash the password
  this.password = await hash(this.password, 10);
});

userSchema.methods.isValidatePassword = async function (password: string) {
  return await compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
