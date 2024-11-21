document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookie-consent");
  const acceptBtn = document.getElementById("accept-btn");
  const closeBtn = document.getElementById("close-btn");

  // Check if consent is already given
  const isCookieAccepted = localStorage.getItem("cookieAccepted");
  if (!isCookieAccepted) {
    // Show popup if not accepted
    cookiePopup.classList.add("show");
  }

  acceptBtn.addEventListener("click", function () {
    // Hide the popup
    cookiePopup.classList.remove("show");
    // Save consent in local storage
    localStorage.setItem("cookieAccepted", "true");
  });

  closeBtn.addEventListener("click", function () {
    // Hide the popup without saving consent
    cookiePopup.classList.remove("show");
  });
});
