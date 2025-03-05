document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const saveSettingsButton = document.getElementById("save-settings");
    const cancelSettingsButton = document.getElementById("cancel-settings");
    const settingsModal = document.getElementById("settings");

    const targetTimeInput = document.getElementById("target-time");
    const fontSizeInput = document.getElementById("font-size");
    const fontFamilyInput = document.getElementById("font-family");
    const fontColorInput = document.getElementById("font-color");
    const textStrokeWidthInput = document.getElementById("text-stroke-width");
    const textStrokeColorInput = document.getElementById("text-stroke-color");
    const backgroundImageInput = document.getElementById("background-image");
    const backgroundColorInput = document.getElementById("background-color");
    const positionXInput = document.getElementById("position-x");
    const positionYInput = document.getElementById("position-y");
    const fontWeightInput = document.getElementById("font-weight");

    let targetTime = localStorage.getItem("targetTime") || "2025-07-05T04:18";
    let fontSize = localStorage.getItem("fontSize") || "40";
    let fontFamily = localStorage.getItem("fontFamily") || "Arial";
    let fontColor = localStorage.getItem("fontColor") || "#000000";
    let textStrokeWidth = localStorage.getItem("textStrokeWidth") || "0";
    let textStrokeColor = localStorage.getItem("textStrokeColor") || "#000000";
    let backgroundImage = localStorage.getItem("backgroundImage") || "https://github.com/tamemu/Countdown-timer/blob/2a1ca37ecacec4bf3d7225f04ef13fffd4355b3c/images/2025_7_5.png";
    let backgroundColor = localStorage.getItem("backgroundColor") || "#ffffff";
    let positionX = localStorage.getItem("positionX") || "50";
    let positionY = localStorage.getItem("positionY") || "50";
    let fontWeight = localStorage.getItem("fontWeight") || "normal";

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
        countdownElement.style.fontWeight = fontWeight;

        if (backgroundImage) {
            document.body.style.backgroundImage = `url(${backgroundImage})`;
        } else {
            document.body.style.backgroundImage = "";
        }
        document.body.style.backgroundColor = backgroundColor;

        countdownElement.style.position = "absolute";
        countdownElement.style.left = `${positionX}%`;
        countdownElement.style.top = `${positionY}%`;
        countdownElement.style.transform = "translate(-50%, -50%)";
    }

    countdownElement.addEventListener("click", () => {
        settingsModal.style.display = "block";
        targetTimeInput.value = targetTime;
        fontSizeInput.value = fontSize;
        fontFamilyInput.value = fontFamily;
        fontColorInput.value = fontColor;
        textStrokeWidthInput.value = textStrokeWidth;
        textStrokeColorInput.value = textStrokeColor;
        backgroundColorInput.value = backgroundColor;
        positionXInput.value = positionX;
        positionYInput.value = positionY;
        fontWeightInput.value = fontWeight;
    });

    saveSettingsButton.addEventListener("click", () => {
        targetTime = targetTimeInput.value;
        fontSize = fontSizeInput.value;
        fontFamily = fontFamilyInput.value;
        fontColor = fontColorInput.value;
        textStrokeWidth = textStrokeWidthInput.value;
        textStrokeColor = textStrokeColorInput.value;
        backgroundColor = backgroundColorInput.value;
        positionX = positionXInput.value;
        positionY = positionYInput.value;
        fontWeight = fontWeightInput.value;
        localStorage.setItem("targetTime", targetTime);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("fontFamily", fontFamily);
        localStorage.setItem("fontColor", fontColor);
        localStorage.setItem("textStrokeWidth", textStrokeWidth);
        localStorage.setItem("textStrokeColor", textStrokeColor);
        localStorage.setItem("backgroundColor", backgroundColor);
        localStorage.setItem("positionX", positionX);
        localStorage.setItem("positionY", positionY);
        localStorage.setItem("fontWeight", fontWeight);

        const file = backgroundImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                backgroundImage = e.target.result;
                localStorage.setItem("backgroundImage", backgroundImage);
                applySettings();
            };
            reader.readAsDataURL(file);
        } else {
            backgroundImage = localStorage.getItem("backgroundImage") || "https://github.com/tamemu/Countdown-timer/blob/2a1ca37ecacec4bf3d7225f04ef13fffd4355b3c/images/2025_7_5.png";
            localStorage.setItem("backgroundImage", backgroundImage);
            applySettings();
        }

        settingsModal.style.display = "none";
    });

    cancelSettingsButton.addEventListener("click", () => {
        settingsModal.style.display = "none";
    });

    setInterval(updateCountdown, 1000);
    applySettings();
});
