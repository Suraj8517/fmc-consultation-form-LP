import { RAZORPAY_FIELD_KEYS } from "../constants/constants";

export function buildRazorpayUrl(baseUrl, { full_name,email, phone }) {
  const url = new URL(baseUrl);
  if (full_name) url.searchParams.set(RAZORPAY_FIELD_KEYS.full_name, full_name);
  if (email) url.searchParams.set(RAZORPAY_FIELD_KEYS.email, email);
  if (phone) url.searchParams.set(RAZORPAY_FIELD_KEYS.phone, phone);
  return url.toString();
}