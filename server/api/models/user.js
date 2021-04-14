var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
import Token from './token';
import jwt from 'jsonwebtoken';
import { Constants } from '../../helpers';
var randomstring = require('randomstring');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: Constants.roles,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    site: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Site',
    },
    inviteStatus: {
      type: String,
      required: false,
      default: 'accepted',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  let payload = {
    id: this._id,
    email: this.email,
    user: this.role,
  };
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};
UserSchema.methods.generateVerificationToken = function () {
  let payload = {
    userId: this._id,
    token: randomstring.generate({
      length: 6,
      charset: 'numeric',
    }),
  };

  return new Token(payload);
};

export default mongoose.model('User', UserSchema);
