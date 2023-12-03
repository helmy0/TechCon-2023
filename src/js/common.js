// Using JavaScript, the footer & header files are added to each page to achieve code reusability and improve mudalarity .

document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("./header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  // Load footer
  fetch("./footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
});



// Function to update the countdown element
function updateCountdown() {
  var countDownDate = new Date("Dec 14, 2023 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `
            <h1 style="text-align: center; padding-bottom: 50px">Countdown</h1>

            <div>${days} days</div>
            <div>${hours} <br>hours</div>
            <div>${minutes} minutes</div>
            <div>${seconds} seconds</div>
        `;

  }, 1000);
}

// Display the events of the day selected by the user from the dropdwon menu
document.addEventListener('DOMContentLoaded', function() {
  var dayFilter = document.getElementById('dayFilter');
  var scheduleTable = document.getElementById('schedule');

  dayFilter.addEventListener('change', function() {
    var selectedDay = this.value;
    var tableRows = scheduleTable.getElementsByTagName('tr');

    for (var i = 0; i < tableRows.length; i++) {
      var row = tableRows[i];

      if (selectedDay === 'all') {
        row.style.display = '';
      } else {
        var rowDay = row.getAttribute('data-day');

        if (rowDay === selectedDay) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    }
  });
});

//

function validateForm() {
  var firstName = document.getElementById('Fname').value;
  var lastName = document.getElementById('Lname').value;
  var email = document.getElementById('email').value;

  // Check if first name is empty or contains numbers
  if (firstName === '' || /\d/.test(firstName)) {
    alert('Please enter a valid first name.');
    return false;
  }

  // Check if last name is empty
  if (lastName === '') {
    alert('Please enter a valid last name.');
    return false;
  }

  // Check if email is empty or in the correct format where i used regular expression to validate the email format
  if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // If all checks pass, the form is valid
  return true;
  }


// Initial update
updateCountdown();
updateCountdown();

$(document).ready(function () {
  // Toggle mobile menu
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggleClass("show");
  });
});
