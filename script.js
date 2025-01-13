
const settings = {
    scales: [],
    keys: [],
    positions: [],
    phrases: [],
    bpmRange: { min: 90, max: 120 }
};

// 設定の初期化 (選択済みチェックボックスのみ取得)
function initializeSettings() {
    settings.scales = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(1) input:checked')).map(el => el.value);
    settings.keys = Array.from(document.querySelectorAll('.key-row input:checked')).map(el => el.value);
    settings.positions = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(2) input:checked')).map(el => el.value);
    settings.phrases = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(3) input:checked')).map(el => el.value);
    settings.bpmRange.min = Number(document.getElementById('bpm-min').value);
    settings.bpmRange.max = Number(document.getElementById('bpm-max').value);
}

// お題生成関数 (選択項目から正確にランダム選択)
function generateTask() {
    initializeSettings();

    // チェックされているものだけからランダム選択
    const errors = [];
    if (settings.scales.length === 0) errors.push('スケールを最低1つ選択してください。');
    if (settings.keys.length === 0) errors.push('キーを最低1つ選択してください。');
    if (settings.positions.length === 0) errors.push('スタートポジションを最低1つ選択してください。');
    if (settings.phrases.length === 0) errors.push('フレーズを最低1つ選択してください。');

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    // 正確にチェックされた項目からランダム選択
    const scale = settings.scales[Math.floor(Math.random() * settings.scales.length)];
    const key = settings.keys[Math.floor(Math.random() * settings.keys.length)];
    const position = settings.positions[Math.floor(Math.random() * settings.positions.length)];
    const phrase = settings.phrases[Math.floor(Math.random() * settings.phrases.length)];
    const bpm = Math.floor(Math.random() * (settings.bpmRange.max - settings.bpmRange.min + 1)) + settings.bpmRange.min;

    // お題の表示を更新
    document.getElementById('scale-display').textContent = `スケール: ${scale}`;
    document.getElementById('key-display').textContent = `キー: ${key}`;
    document.getElementById('position-display').textContent = `スタートポジション: ${position}`;
    document.getElementById('phrase-display').textContent = `フレーズ: ${phrase}`;
    document.getElementById('bpm-display').textContent = `BPM: ${bpm}`;
}

// ボタンのイベントリスナー (修正済み)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-task').addEventListener('click', generateTask);
});
