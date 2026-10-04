// Replays the one-time request animation in the hero.
const trace = document.getElementById("trace");
const replay = document.getElementById("replay");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function runTrace() {
    if (reduceMotion.matches) return;
    trace.classList.remove("run");
    void trace.offsetWidth; // restart the CSS animation
    trace.classList.add("run");
}

replay.addEventListener("click", runTrace);
runTrace();

document.getElementById("year").textContent = new Date().getFullYear();
