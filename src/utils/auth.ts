import { SignJWT, jwtVerify } from 'jose';
import Cookies from 'js-cookie';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET || 'your-secret-key');
const COOKIE_NAME = 'auth_token';

export interface JWTPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const createToken = async (payload: JWTPayload): Promise<string> => {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .setIssuedAt()
    .sign(JWT_SECRET);

  Cookies.set(COOKIE_NAME, token, {
    expires: 1/3, // 8 hours
    secure: true,
    sameSite: 'strict'
  });

  return token;
};

export const verifyToken = async (token: string): Promise<JWTPayload | null> => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as JWTPayload;
  } catch {
    return null;
  }
};

export const getToken = (): string | undefined => {
  return Cookies.get(COOKIE_NAME);
};

export const removeToken = (): void => {
  Cookies.remove(COOKIE_NAME);
};