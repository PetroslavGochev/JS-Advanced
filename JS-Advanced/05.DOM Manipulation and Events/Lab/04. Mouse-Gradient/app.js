function attachGradientEvents() {
    let result = document.getElementById('result');
    document.getElementById('gradient').addEventListener('mousemove', (ev) => {
        let percentage = Math.floor(Number(ev.offsetX * 100 / 300));
        result.textContent = `${percentage}%`;
    });
}