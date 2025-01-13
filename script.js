
document.addEventListener("DOMContentLoaded", function() {
    const generateTask = () => {
        const scales = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(1) input:checked')).map(el => el.value);
        const keys = Array.from(document.querySelectorAll('.key-row input:checked')).map(el => el.value);
        const bpmMin = Number(document.getElementById('bpm-min').value);
        const bpmMax = Number(document.getElementById('bpm-max').value);

        if (!scales.length || !keys.length) {
            alert("Please select at least one option in each category.");
            return;
        }

        const randomScale = scales[Math.floor(Math.random() * scales.length)];
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomBPM = Math.floor(Math.random() * (bpmMax - bpmMin + 1)) + bpmMin;

        document.getElementById("scale-display").textContent = `Scale: ${randomScale}`;
        document.getElementById("key-display").textContent = `Key: ${randomKey}`;
        document.getElementById("bpm-display").textContent = `BPM: ${randomBPM}`;
    };

    document.getElementById("generate-task").addEventListener("click", generateTask);
});
