// Year
document.addEventListener("DOMContentLoaded", () => {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
});

// Smooth scroll for internal anchors
document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
});

// FAQ: keep only one open
document.addEventListener("toggle", (e) => {
    if (e.target.tagName !== "DETAILS") return;
    if (!e.target.open) return;

    document.querySelectorAll(".faq details").forEach((d) => {
        if (d !== e.target) d.open = false;
    });
}, true);

// Scroll Reveal
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
            // Remove reveal class after animation to restore native hover transitions
            setTimeout(() => {
                entry.target.classList.remove("reveal", "active");
            }, 800);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
