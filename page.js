// Shows the section matching ?lang=, else the browser language, else English.
(function () {
  const wanted = new URLSearchParams(location.search).get("lang") || (navigator.language || "en").slice(0, 2);
  const lang = ["fr", "de", "en"].includes(wanted) ? wanted : "en";
  document.querySelectorAll("section[lang]").forEach((s) => s.classList.toggle("on", s.lang === lang));
  document.querySelectorAll("nav.lang a").forEach((a) => a.classList.toggle("on", a.dataset.lang === lang));
  document.documentElement.lang = lang;
})();
