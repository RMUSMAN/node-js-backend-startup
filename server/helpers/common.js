// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_CLIENT_ID);

export const decodeToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  return jwt.verify(token, process.env.SECRET);
};

export const generateJwt = (user, password = null) => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  let payload = {
    id: user._id,
    email: user.email,
    role: user.role,
    password: password ? password : user.password,
  };
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  });
};

export const generateInviteLink = (token) => {
  return `${process.env.APP_LINK}/landing/${token}`;
};

export const decodeInviteToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

export const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
  });
  const payload = ticket.getPayload();
  return payload;
};
