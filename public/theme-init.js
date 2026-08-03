(function () {
  try {
    var stored = localStorage.getItem("shivam-sabbarwal-theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    // Paint the resolved theme before first paint, otherwise a visitor whose
    // system is dark gets a flash of the light theme (or keeps it entirely).
    var root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.style.colorScheme = theme;

    var link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = theme === "dark" ? "/icon-dark.svg" : "/icon-light.svg";
    link.setAttribute("data-theme-managed", "true");
    document.head.appendChild(link);
  } catch {
    /* A missing theme just means the default light paint stands. */
  }
})();
