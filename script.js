document.getElementById("waitlist-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thanks! You're on the list.";
  this.reset();
});
