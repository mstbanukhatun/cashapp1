function submitUsername() {
  var username = document.getElementById('usernameInput').value;
  if (username.trim() !== '') {
    document.getElementById('usernameOverlay').classList.add('hidden');
  }
}

function openCrate() {
  var randomAmount = 750; // Generate random amount between 1 and 1000
  var congratulationsText = "you got $" + randomAmount;
  document.getElementById('congratulationsText').innerText = congratulationsText;
  document.getElementById('congratulationsOverlay').classList.remove('hidden');
}

function redirectToClaim() {
  // Redirect to the claim page
  window.location.href = "https://smrturl.co/o/595373/53177516?s1=750";
}
