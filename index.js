document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link for the section currently in view.
const links = document.querySelectorAll(".nav__links a");
const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link) =>
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
                );
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
}

// Light and dark theme toggle. The saved choice wins; otherwise follow the device.
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}

applyTheme(root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light"));

toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { }
});

systemDark.addEventListener("change", (event) => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) { }
    if (!saved) applyTheme(event.matches ? "dark" : "light");
});
