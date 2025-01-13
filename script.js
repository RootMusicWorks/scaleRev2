
const settings = {
    scales: [],
    keys: [],
    positions: [],
    phrases: [],
    bpmRange: { min: 90, max: 120 }
};

// 設定の初期化
function initializeSettings() {
    settings.scales = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(1) input:checked')).map(el => el.value);
    settings.keys = Array.from(document.querySelectorAll('.key-row input:checked')).map(el => el.value);
    settings.positions = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(2) input:checked')).map(el => el.value);
    settings.phrases = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(3) input:checked')).map(el => el.value);
    settings.bpmRange.min = Number(document.getElementById('bpm-min').value);
    settings.bpmRange.max = Number(document.getElementById('bpm-max').value);
}

// お題生成関数
function generateTask() {
    initializeSettings();

    if (settings.scales.length === 0 || settings.keys.length === 0 || settings.positions.length === 0 || settings.phrases.length === 0) {
        alert('すべてのカテゴリで最低1つの項目を選択してください。');
        return;
    }

    const scale = settings.scales[Math.floor(Math.random() * settings.scales.length)];
    const key = settings.keys[Math.floor(Math.random() * settings.keys.length)];
    const position = settings.positions[Math.floor(Math.random() * settings.positions.length)];
    const phrase = settings.phrases[Math.floor(Math.random() * settings.phrases.length)];
    const bpm = Math.floor(Math.random() * (settings.bpmRange.max - settings.bpmRange.min + 1)) + settings.bpmRange.min;

    document.getElementById('scale-display').textContent = `スケール: ${scale}`;
    document.getElementById('key-display').textContent = `キー: ${key}`;
    document.getElementById('position-display').textContent = `スタートポジション: ${position}`;
    document.getElementById('phrase-display').textContent = `フレーズ: ${phrase}`;
    document.getElementById('bpm-display').textContent = `BPM: ${bpm}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-task').addEventListener('click', generateTask);
});
