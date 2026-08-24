document.addEventListener("DOMContentLoaded", () => {
    const anoEl = document.getElementById("ano");
    if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
    }
});
