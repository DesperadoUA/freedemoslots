export const JSON_LD_SITE_NAME = "Free Demo Slots";
export const JSON_LD_LOGO_PATH = "/img/freedemoslots-logo.webp";
export const JSON_LD_LOGO_WIDTH = 636;
export const JSON_LD_LOGO_HEIGHT = 263;
export const JSON_LD_SUPPORT_EMAIL = "support@freedemoslots.net";

export function toAbsUrl(origin, path) {
  if (!path) return origin;
  if (/^https?:\/\//i.test(path)) return path;
  return origin + (path.startsWith("/") ? path : `/${path}`);
}

function compact(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (Array.isArray(value)) {
    const next = value.map(compact).filter((item) => item !== undefined);
    return next.length ? next : undefined;
  }
  if (typeof value === "object") {
    const next = {};
    for (const [key, item] of Object.entries(value)) {
      const compacted = compact(item);
      if (compacted !== undefined) next[key] = compacted;
    }
    return Object.keys(next).length ? next : undefined;
  }
  return value;
}

export function buildWebSiteJsonLd({
  origin,
  name = JSON_LD_SITE_NAME,
  logo,
  logoWidth = JSON_LD_LOGO_WIDTH,
  logoHeight = JSON_LD_LOGO_HEIGHT,
  email = JSON_LD_SUPPORT_EMAIL,
}) {
  if (!origin) return null;

  const logoUrl = logo || toAbsUrl(origin, JSON_LD_LOGO_PATH);

  return compact({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: `${origin}/`,
    name,
    publisher: {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name,
      url: `${origin}/`,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: logoWidth,
        height: logoHeight,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email,
      },
    },
  });
}

export function buildBreadcrumbJsonLd({ items, origin, pageUrl }) {
  if (!items?.length || !origin) return null;

  return compact({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const href = item.permalink
        ? toAbsUrl(origin, item.permalink)
        : index === items.length - 1
          ? pageUrl
          : "";
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        item: href,
      };
    }),
  });
}

export function buildReviewJsonLd({
  name,
  description,
  image,
  url,
  datePublished,
  dateModified,
  rating,
  bestRating = 10,
  worstRating = 0,
  author,
  publisherName = JSON_LD_SITE_NAME,
  origin,
}) {
  if (!name || rating == null || rating === "") return null;

  const authorNode = author
    ? {
        "@type": "Person",
        name: author.name || author,
        url: author.url,
      }
    : {
        "@type": "Organization",
        name: publisherName,
      };

  return compact({
    "@context": "https://schema.org",
    "@type": "Review",
    name,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    itemReviewed: {
      "@type": "Game",
      name,
      description,
      image: image ? { "@type": "ImageObject", url: image } : undefined,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating,
      bestRating,
      worstRating,
    },
    author: authorNode,
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: origin ? `${origin}/` : undefined,
    },
  });
}
