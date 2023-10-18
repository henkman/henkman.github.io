const dateFormat = (d) => {
    return d.getFullYear() + "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("0" + d.getDate()).slice(-2) + "T" +
        ("0" + d.getHours()).slice(-2) + ":" +
        ("0" + d.getMinutes()).slice(-2) + ":" +
        ("0" + d.getSeconds()).slice(-2);
};

const $until = document.getElementById("until");
const params = new URLSearchParams(window.location.search);
const paramMs = params.get("ms");
let dt;
if (paramMs) {
    dt = new Date(paramMs * 1000);
    const $days = document.getElementById("days");
    const $hours = document.getElementById("hours");
    const $minutes = document.getElementById("minutes");
    const $seconds = document.getElementById("seconds");
    const tick = () => {
        const diffMs = Math.abs(dt.getTime() - new Date().getTime());
        const diffSecs = Math.floor(diffMs / 1000);
        const mins = Math.floor(diffSecs / 60);
        const hours = Math.floor(mins / 60);
        const days = Math.floor(hours / 24);
        $days.innerHTML = days;
        $hours.innerHTML = hours % 24;
        $minutes.innerHTML = mins % 60;
        $seconds.innerHTML = diffSecs % 60;
    };
    tick();
    window.setInterval(tick, 1000);
} else {
    dt = new Date();
}
$until.value = dateFormat(dt);
document.querySelector("button").addEventListener("click", () => {
    const ndt = new Date($until.value);
    const ms = Math.floor(ndt.getTime() / 1000);
    window.location.search = "?ms=" + ms;
});
