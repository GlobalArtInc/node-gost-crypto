import { hmac } from "@noble/hashes/hmac.js";
import { createHasher } from "@noble/hashes/utils.js";
import { Streebog256, Streebog512 } from "./index";

export const Streebog256HMAC = (key: Uint8Array) => {
  return hmac.create(createHasher(Streebog256.create), key);
};

export const Streebog512HMAC = (key: Uint8Array) => {
  return hmac.create(createHasher(Streebog512.create), key);
};
