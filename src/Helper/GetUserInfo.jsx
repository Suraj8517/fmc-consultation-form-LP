export function getUserInfoFromParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    full_name:params.get("full_name")||"",
    phone: params.get("phone") || "",
    email: params.get("email") || "",
  };
}