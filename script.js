document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const saveSettingsButton = document.getElementById("save-settings");
    const settingsModal = document.getElementById("settings");

    const targetTimeInput = document.getElementById("target-time");
    const fontSizeInput = document.getElementById("font-size");
    const fontFamilyInput = document.getElementById("font-family");
    const fontColorInput = document.getElementById("font-color");
    const textStrokeWidthInput = document.getElementById("text-stroke-width");
    const textStrokeColorInput = document.getElementById("text-stroke-color");
    const positionInput = document.getElementById("position");

    let targetTime = localStorage.getItem("targetTime") || "2025-07-05T04:18";
    let fontSize = localStorage.getItem("fontSize") || "40";
    let fontFamily = localStorage.getItem("fontFamily") || "Arial";
    let fontColor = localStorage.getItem("fontColor") || "#000000";
    let textStrokeWidth = localStorage.getItem("textStrokeWidth") || "0";
    let textStrokeColor = localStorage.getItem("textStrokeColor") || "#000000";
    let position = localStorage.getItem("position") || "center";

    function updateCountdown() {
        if (!targetTime) return;
        
        const now = new Date();
        const targetDate = new Date(targetTime);
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownElement.textContent = "00日 00時間 00分 00秒";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
    }

    function applySettings() {
        countdownElement.style.fontSize = fontSize + "px";
        countdownElement.style.fontFamily = fontFamily;
        countdownElement.style.color = fontColor;
        countdownElement.style.webkitTextStrokeWidth = textStrokeWidth + "px";
        countdownElement.style.webkitTextStrokeColor = textStrokeColor;

        if (position === "top") {
            countdownElement.style.position = "absolute";
            countdownElement.style.top = "10%";
        } else if (position === "bottom") {
            countdownElement.style.position = "absolute";
            countdownElement.style.bottom = "10%";
        } else {
            countdownElement.style.position = "relative";
            countdownElement.style.top = "50%";
            countdownElement.style.transform = "translateY(-50%)";
        }
    }

    countdownElement.addEventListener("click", () => {
        settingsModal.style.display = "block";
        targetTimeInput.value = targetTime;
        fontSizeInput.value = fontSize;
        fontFamilyInput.value = fontFamily;
        fontColorInput.value = fontColor;
        textStrokeWidthInput.value = textStrokeWidth;
        textStrokeColorInput.value = textStrokeColor;
        positionInput.value = position;
    });

    saveSettingsButton.addEventListener("click", () => {
        targetTime = targetTimeInput.value;
        fontSize = fontSizeInput.value;
        fontFamily = fontFamilyInput.value;
        fontColor = fontColorInput.value;
        textStrokeWidth = textStrokeWidthInput.value;
        textStrokeColor = textStrokeColorInput.value;
        position = positionInput.value;
        localStorage.setItem("targetTime", targetTime);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("fontFamily", fontFamily);
        localStorage.setItem("fontColor", fontColor);
        localStorage.setItem("textStrokeWidth", textStrokeWidth);
        localStorage.setItem("textStrokeColor", textStrokeColor);
        localStorage.setItem("position", position);
        applySettings();
        settingsModal.style.display = "none";
    });

    setInterval(updateCountdown, 1000);
    applySettings();
});
