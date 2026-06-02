console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page Loaded Successfully");
};

/* Events Data */

const events = [

  {
    name: "Music Night",
    category: "Music",
    seats: 20
  },

  {
    name: "Food Festival",
    category: "Food",
    seats: 30
  },

  {
    name: "Yoga Camp",
    category: "Health",
    seats: 15
  },

  {
    name: "Coding Workshop",
    category: "Education",
    seats: 25
  }

];

/* Display Events */

function displayEvents(data) {

  const container =
    document.querySelector("#eventContainer");

  container.innerHTML = "";

  data.forEach(event => {

    const card =
      document.createElement("div");

    card.className = "eventCard";

    card.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.category}</p>
            <p>Seats : ${event.seats}</p>

            <button onclick="registerSeat('${event.name}')">
                Register
            </button>
        `;

    container.appendChild(card);
  });
}

displayEvents(events);

/* Filter */

document
  .getElementById("categoryFilter")
  .onchange = function () {

    localStorage.setItem(
      "category",
      this.value
    );

    if (this.value === "All") {
      displayEvents(events);
    }
    else {

      const filtered =
        events.filter(
          e => e.category === this.value
        );

      displayEvents(filtered);
    }
  };

/* Restore Preference */

const saved =
  localStorage.getItem("category");

if (saved) {

  document.getElementById(
    "categoryFilter"
  ).value = saved;
}

/* Registration */

function registerSeat(name) {

  alert(
    "Successfully registered for "
    + name
  );
}

/* Phone Validation */

document
  .getElementById("phone")
  .onblur = function () {

    if (this.value.length < 10) {

      alert(
        "Enter valid phone number"
      );
    }
  };

/* Character Counter */

document
  .getElementById("message")
  .onkeyup = function () {

    document.getElementById(
      "count"
    ).innerText = this.value.length;
  };

/* Form */

document
  .getElementById("registerForm")
  .addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      document
        .getElementById("output")
        .innerHTML =
        "Registration Successful!";
    });

/* Video */

document
  .getElementById("promoVideo")
  .oncanplay = function () {

    document
      .getElementById("videoStatus")
      .innerHTML =
      "Video ready to play";
  };

/* Geolocation */

document
  .getElementById("locationBtn")
  .onclick = function () {

    navigator.geolocation
      .getCurrentPosition(

        position => {

          document
            .getElementById(
              "locationResult"
            ).innerHTML =

            `Latitude:
${position.coords.latitude}

<br>

Longitude:
${position.coords.longitude}`;

        },

        () => {
          alert("Location access denied");
        }

      );
  };

/* Gallery Zoom */

document
  .querySelectorAll(".gallery-img")
  .forEach(img => {

    img.ondblclick = function () {

      this.style.width = "300px";
    };
  });