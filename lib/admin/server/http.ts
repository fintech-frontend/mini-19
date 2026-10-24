import "server-only";

// Web standard Request/Response yordamchilari — app/api/admin/* route handlerlari uchun.

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly data?: unknown,
  ) {
    super(message);
  }
}

export function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return Response.json(data, { status, headers: { "cache-control": "no-store", ...headers } });
}

export async function readJson(req: Request): Promise<Record<string, unknown>> {
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    throw new HttpError(415, "So'rov JSON formatida bo'lishi kerak");
  }
  const body: unknown = await req.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new HttpError(400, "JSON tana noto'g'ri");
  return body as Record<string, unknown>;
}

/** O'zgartiruvchi so'rovlar faqat shu saytning o'zidan kelishi mumkin (CSRF himoyasi). */
export function assertSameOrigin(req: Request): void {
  const origin = req.headers.get("origin");
  if (!origin) return;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    throw new HttpError(403, "Origin noto'g'ri");
  }
  if (!host || originHost !== host) throw new HttpError(403, "Boshqa saytdan so'rov taqiqlangan");
}

export function isHttps(req: Request): boolean {
  const proto = req.headers.get("x-forwarded-proto");
  if (proto) return proto.split(",")[0].trim() === "https";
  return new URL(req.url).protocol === "https:";
}

export type Handler = (req: Request) => Promise<Response>;

/** HttpError → { error, data } JSON javob; kutilmagan xato → 500. */
export function wrap(fn: Handler): Handler {
  return async (req) => {
    try {
      return await fn(req);
    } catch (e) {
      if (e instanceof HttpError) return json({ error: e.message, data: e.data ?? null }, e.status);
      console.error("[admin api]", e);
      return json({ error: "Server ichki xatosi" }, 500);
    }
  };
}
