import "./styles.css";
import downloadMetadata from "./download-metadata.json";

type DownloadMetadata = {
  repositoryName: string;
  repositoryUrl: string;
  latestReleaseUrl: string;
  windowsAssetName: string;
  windowsDownloadUrl: string;
};

const metadata = downloadMetadata as DownloadMetadata;
const locale = document.documentElement.lang === "it" ? "it" : "en";

const copy = {
  en: {
    download: "Download for Windows",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
  },
  it: {
    download: "Scarica per Windows",
    menuOpen: "Apri navigazione",
    menuClose: "Chiudi navigazione",
  },
} as const;

function setText(selector: string, value: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.textContent = value;
  });
}

function hydrateDownloadMetadata() {
  setText("[data-release-repo-name]", metadata.repositoryName);
  setText("[data-download-asset]", metadata.windowsAssetName);

  document.querySelectorAll<HTMLAnchorElement>("[data-download-action]").forEach((link) => {
    link.href = metadata.windowsDownloadUrl;
    link.textContent = copy[locale].download;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-release-page]").forEach((link) => {
    link.href = metadata.latestReleaseUrl;
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-release-repo]").forEach((link) => {
    link.href = metadata.repositoryUrl;
  });
}

function setupNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const nav = document.querySelector<HTMLElement>("[data-site-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? copy[locale].menuOpen : copy[locale].menuClose);
    nav.toggleAttribute("data-open", !isOpen);
  });
}

function markCurrentNav() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll<HTMLAnchorElement>(".site-nav a").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupYear() {
  setText("[data-current-year]", String(new Date().getFullYear()));
}

hydrateDownloadMetadata();
setupNavigation();
markCurrentNav();
setupYear();
