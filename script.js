
const settings = {
    scales: [],
    keys: [],
    positions: [],
    phrases: [],
    bpmRange: { min: 90, max: 120 }
};

// 設定の初期化 (デバッグ強化＆要素存在チェック)
function initializeSettings() {
    settings.scales = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(1) input:checked')).map(el => el.value);
    settings.keys = Array.from(document.querySelectorAll('.key-row input:checked')).map(el => el.value);
    settings.positions = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(2) input:checked')).map(el => el.value);
    settings.phrases = Array.from(document.querySelectorAll('#settings .three-column:nth-of-type(3) input:checked')).map(el => el.value);
    settings.bpmRange.min = Number(document.getElementById('bpm-min').value);
    settings.bpmRange.max = Number(document.getElementById('bpm-max').value);
    console.log("Settings Initialized: ", settings);
}

// お題生成関数 (要素存在確認とデバッグ強化)
function generateTask() {
    initializeSettings();

    const errors = [];
    if (settings.scales.length === 0) errors.push('スケールを最低1つ選択してください。');
    if (settings.keys.length === 0) errors.push('キーを最低1つ選択してください。');
    if (settings.positions.length === 0) errors.push('スタートポジションを最低1つ選択してください。');
    if (settings.phrases.length === 0) errors.push('フレーズを最低1つ選択してください。');

    if (errors.length > 0) {
        console.warn("Errors Detected: ", errors);
        alert(errors.join('\n'));
        return;
    }

    // ランダム選択とデバッグ表示
    const scale = settings.scales[Math.floor(Math.random() * settings.scales.length)];
    const key = settings.keys[Math.floor(Math.random() * settings.keys.length)];
    const position = settings.positions[Math.floor(Math.random() * settings.positions.length)];
    const phrase = settings.phrases[Math.floor(Math.random() * settings.phrases.length)];
    const bpm = Math.floor(Math.random() * (settings.bpmRange.max - settings.bpmRange.min + 1)) + settings.bpmRange.min;

    console.log("Generated Task: ", { scale, key, position, phrase, bpm });

    // 要素の存在チェックと内容更新
    const scaleElement = document.getElementById('scale-display');
    const keyElement = document.getElementById('key-display');
    const positionElement = document.getElementById('position-display');
    const phraseElement = document.getElementById('phrase-display');
    const bpmElement = document.getElementById('bpm-display');

    if (scaleElement && keyElement && positionElement && phraseElement && bpmElement) {
        scaleElement.textContent = `スケール: ${scale}`;
        keyElement.textContent = `キー: ${key}`;
        positionElement.textContent = `スタートポジション: ${position}`;
        phraseElement.textContent = `フレーズ: ${phrase}`;
        bpmElement.textContent = `BPM: ${bpm}`;
        console.log("Display Updated Successfully");
    } else {
        console.error("Error: One or more elements not found.");
        alert("エラー: 表示領域が見つかりませんでした。");
    }
}

// イベントリスナーの修正とボタンのバインディング確認
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-task');
    if (button) {
        button.addEventListener('click', generateTask);
        console.log("Button Event Listener Attached");
    } else {
        console.error("Error: Generate Task button not found.");
    }
});
