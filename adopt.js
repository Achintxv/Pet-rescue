function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Load animal details into the page
  document.addEventListener("DOMContentLoaded", () => {
    const name = getQueryParam("name");
    const breed = getQueryParam("breed");
    const location = getQueryParam("location");
    const image = getQueryParam("image");

    document.getElementById("animal-name").innerText = name;
    document.getElementById("animal-breed").innerText = breed;
    document.getElementById("animal-location").innerText = location;
    document.getElementById("animal-image").src = image;

    document.getElementById("adopt-now-btn").addEventListener("click", () => {
      alert(`Thank you for adopting ${name}!`);
    });
  });