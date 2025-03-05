document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const openSettingsButton = document.getElementById("open-settings");
    const closeSettingsButton = document.getElementById("close-settings");
    const saveSettingsButton = document.getElementById("save-settings");
    const settingsModal = document.getElementById("settings-modal");

    const targetTimeInput = document.getElementById("target-time");
    const fontSizeInput = document.getElementById("font-size");
    const fontFamilyInput = document.getElementById("font-family");
    const backgroundImageInput = document.getElementById("background-image");
    const backgroundElement = document.getElementById("background");

    let targetTime = localStorage.getItem("targetTime") || "2025-07-05T04:18";
    let fontSize = localStorage.getItem("fontSize") || "40";
    let fontFamily = localStorage.getItem("fontFamily") || "Arial";
    let backgroundImage = localStorage.getItem("backgroundImage") || "";

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
        if (backgroundImage) {
            backgroundElement.style.backgroundImage = `url(${backgroundImage})`;
        }
    }

    openSettingsButton.addEventListener("click", () => {
        settingsModal.style.display = "block";
        targetTimeInput.value = targetTime;
        fontSizeInput.value = fontSize;
        fontFamilyInput.value = fontFamily;
    });

    closeSettingsButton.addEventListener("click", () => {
        settingsModal.style.display = "none";
    });

    saveSettingsButton.addEventListener("click", () => {
        targetTime = targetTimeInput.value;
        fontSize = fontSizeInput.value;
        fontFamily = fontFamilyInput.value;

        localStorage.setItem("targetTime", targetTime);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("fontFamily", fontFamily);

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
            applySettings();
        }

        settingsModal.style.display = "none";
    });

    setInterval(updateCountdown, 1000);
    applySettings();
});
