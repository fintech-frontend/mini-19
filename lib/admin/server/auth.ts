import "server-only";
import { HttpError, assertSameOrigin, json, readJson, wrap } from "./http";
import { fhpConfig } from "./fhp";
import { authConfigured, clearSessionCookie, readSession, sessionCookie, verifyCredentials } from "./session";

/** GET /api/admin/auth — joriy foydalanuvchi va server rejimi (live / demo) */
export const authGet = wrap(async (req) => {
  const configured = authConfigured();
  return json({
    mode: configured ? "live" : "demo",
    fhp: fhpConfig() !== null,
    user: configured ? readSession(req) : null,
  });
});

/** POST /api/admin/auth?op=login | logout */
export const authPost = wrap(async (req) => {
  assertSameOrigin(req);
  const op = new URL(req.url).searchParams.get("op");

  if (op === "logout") return json({ ok: true }, 200, { "set-cookie": clearSessionCookie(req) });

  if (op === "login") {
    if (!authConfigured()) throw new HttpError(503, "Server autentifikatsiyasi sozlanmagan");
    const body = await readJson(req);
    const login = typeof body.login === "string" ? body.login : "";
    const password = typeof body.password === "string" ? body.password : "";
    const user = login && password ? verifyCredentials(login, password) : null;
    if (!user) {
      await new Promise((r) => setTimeout(r, 500)); // parol tanlashni sekinlashtirish
      throw new HttpError(401, "Login yoki parol noto'g'ri");
    }
    return json({ user }, 200, { "set-cookie": sessionCookie(req, user) });
  }

  throw new HttpError(404, "Noma'lum amal");
});
