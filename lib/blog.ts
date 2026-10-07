const BLOG_URL = "https://blog.kloud101.com";

export interface BlogPost {
  title: string;
  url: string;
  published: string;
  excerpt: string;
  image: string | null;
}

interface BloggerEntry {
  title: { $t: string };
  published: { $t: string };
  content?: { $t: string };
  summary?: { $t: string };
  link: { rel: string; href: string }[];
  "media$thumbnail"?: { url: string };
}

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&lt;": "<",
  "&gt;": ">",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&mdash;": "—",
  "&ndash;": "–",
};

function toPlainText(html: string) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, (entity) => ENTITIES[entity] ?? " ")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptFor(title: string, html: string, length = 170) {
  let text = toPlainText(html);
  // Posts often repeat their title as the first heading.
  if (text.toLowerCase().startsWith(title.toLowerCase())) {
    text = text.slice(title.length).trim();
  }
  if (text.length <= length) return text;
  return `${text.slice(0, text.lastIndexOf(" ", length))}…`;
}

/** Blogger thumbnails are 72px; ask for a 16:9 version large enough for a card. */
function largeThumbnail(url?: string) {
  return url ? url.replace(/\/s72-[^/]+\//, "/w800-h450-c/") : null;
}

/** Latest posts from blog.kloud101.com (Blogger JSON feed), cached for an hour. Returns [] on failure. */
export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${BLOG_URL}/feeds/posts/default?alt=json&max-results=${count}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const data = await response.json();
    const entries: BloggerEntry[] = data?.feed?.entry ?? [];

    return entries.map((entry) => {
      const title = entry.title.$t.trim();
      const href = entry.link.find((link) => link.rel === "alternate")?.href ?? BLOG_URL;
      return {
        title,
        url: encodeURI(decodeURI(href)),
        published: entry.published.$t,
        excerpt: excerptFor(title, entry.content?.$t ?? entry.summary?.$t ?? ""),
        image: largeThumbnail(entry["media$thumbnail"]?.url),
      };
    });
  } catch {
    return [];
  }
}

export { BLOG_URL };
