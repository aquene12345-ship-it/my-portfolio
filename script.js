document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recommendationForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const nameInput = document.getElementById("recommendationName");
            const textInput = document.getElementById("recommendationText");

            const reviewerName = nameInput.value.trim() ? nameInput.value.trim() : "Anonymous Peer";
            const reviewerText = textInput.value.trim();

            const container = document.getElementById("recommendationContainer");
            const card = document.createElement("div");
            card.className = "recommendation-card";
            card.innerHTML = `
                <p>"${reviewerText}"</p>
                <h4>- ${reviewerName}</h4>
            `;
            container.appendChild(card);

            showPopup(reviewerName);

            form.reset();
        });
    }
});

function showPopup(name) {
    let popup = document.getElementById("submissionPopup");
    if (!popup) {
        popup = document.createElement("div");
        popup.id = "submissionPopup";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "#ffffff";
        popup.style.padding = "30px";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
        popup.style.zIndex = "2000";
        popup.style.textAlign = "center";
        popup.style.borderTop = "4px solid #38bdf8";
        document.body.appendChild(popup);
    }

    popup.innerHTML = `
        <h3 style="margin-bottom: 10px; color: #0f172a; font-family: sans-serif;">Thank You!</h3>
        <p style="color: #475569; margin-bottom: 20px; font-family: sans-serif;">Your recommendation from <strong>${name}</strong> has been submitted successfully.</p>
        <button id="closePopupBtn" style="background-color: #38bdf8; color: #fff; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer; font-weight: bold;">Ok</button>
    `;
    popup.style.display = "block";

    document.getElementById("closePopupBtn").addEventListener("click", function () {
        popup.style.display = "none";
    });
}