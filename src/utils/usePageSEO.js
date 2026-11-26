import { useEffect } from "react";
import { ROUTE_SEO, SITE_URL, DEFAULT_OG_IMAGE } from "./seoConfig";

function upsertMeta(attrName, attrValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  if (!href) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  const script = existing || document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function useRouteSEO(pathname) {
  useEffect(() => {
    // Las rutas de detalle de blog gestionan su propio SEO dinámico en BlogDetail.js
    if (pathname.startsWith("/blog/")) return;

    const normalized = pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    const config = ROUTE_SEO[normalized] || {
      title: "HiComerce | Marketing 360° e Inteligencia Artificial para Ventas",
      description:
        "Agencia mexicana de Marketing 360° e Inteligencia Artificial para ventas B2B y e-commerce.",
      canonical: `${SITE_URL}${normalized === "/" ? "/" : normalized}`,
      ogType: "website",
      schema: null,
    };

    document.title = config.title;
    upsertMeta("name", "description", config.description);
    upsertCanonical(config.canonical);

    upsertMeta("property", "og:type", config.ogType || "website");
    upsertMeta("property", "og:url", config.canonical);
    upsertMeta("property", "og:title", config.title);
    upsertMeta("property", "og:description", config.description);
    upsertMeta("property", "og:image", config.image || DEFAULT_OG_IMAGE);

    upsertMeta("name", "twitter:title", config.title);
    upsertMeta("name", "twitter:description", config.description);
    upsertMeta("name", "twitter:image", config.image || DEFAULT_OG_IMAGE);

    upsertJsonLd("hicomerce-route-schema", config.schema || null);
  }, [pathname]);
}

export function useCustomPageSEO({
  title,
  description,
  canonical,
  ogType = "article",
  image = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime,
  schema = null,
  schemaId = "hicomerce-route-schema",
}) {
  useEffect(() => {
    if (!title) return;
    document.title = title;
    if (description) upsertMeta("name", "description", description);
    if (canonical) upsertCanonical(canonical);

    upsertMeta("property", "og:type", ogType);
    if (canonical) upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    if (image) upsertMeta("property", "og:image", image);

    if (publishedTime) upsertMeta("property", "article:published_time", publishedTime);
    if (modifiedTime) upsertMeta("property", "article:modified_time", modifiedTime);

    upsertMeta("name", "twitter:title", title);
    if (description) upsertMeta("name", "twitter:description", description);
    if (image) upsertMeta("name", "twitter:image", image);

    upsertJsonLd(schemaId, schema);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [title, description, canonical, ogType, image, publishedTime, modifiedTime, schema, schemaId]);
}
