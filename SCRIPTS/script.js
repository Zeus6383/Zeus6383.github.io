function validateForm() {
    var name = document.getElementById("name").value;
    var discordName = document.getElementById("discordName").value;
    var gamesPlayed = document.getElementById("games_Played").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    
    // Check if required fields are filled
    if (name === "" || discordName === "" || gamesPlayed === "" || email === "" || !gender) {
      alert("Please fill in all required fields.");
      return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }