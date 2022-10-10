let root = document.documentElement;

root.addEventListener("mousemove", e => {
    root.style.setProperty("--stroke-width", e.clientX/1000);
    }
);
