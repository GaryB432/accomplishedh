export function getHeaders(): HeadersInit {
  return new Headers([
    ["content-type", "application/json;charset=UTF-8"],
    ["Access-Control-Allow-Credentials", "true"],
    ["Access-Control-Allow-Origin", "*"],
    [
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    ],
    ["Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT"],
    ["X-Powered-By", "HA"],
  ]);
}
