document.addEventListener("DOMContentLoaded", function() {
    // Scroll to Top Button
    let scrollBtn = document.createElement("button");
    scrollBtn.innerText = "⬆";
    scrollBtn.id = "scrollToTop";
    scrollBtn.style.cssText = "position:fixed; bottom:20px; right:20px; padding:10px 15px; font-size:20px; display:none; background:#ff6961; color:white; border:none; border-radius:50%; cursor:pointer;";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", function() {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Pet Details Modal
    let petCards = document.querySelectorAll(".pet-card");
    petCards.forEach(card => {
        card.addEventListener("click", function() {
            let petName = this.querySelector("h3").innerText;
            let petDesc = this.querySelector("p").innerText;
            let petImg = this.querySelector("img").src;
            
            let modal = document.createElement("div");
            modal.id = "petModal";
            modal.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; padding:20px; border-radius:10px; box-shadow:0 0 15px rgba(0,0,0,0.2); text-align:center;";
            modal.innerHTML = `
                <img src="${petImg}" style="max-width:200px; border-radius:10px;">
                <h2>${petName}</h2>
                <p>${petDesc}</p>
                <button id="closeModal" style="padding:10px 15px; background:#ff4747; color:white; border:none; border-radius:5px; cursor:pointer;">Close</button>
            `;
            document.body.appendChild(modal);

            document.getElementById("closeModal").addEventListener("click", function() {
                modal.remove();
            });
        });
    });

    // Form Validation for Contact
    let contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            let email = document.querySelector("#email").value;
            let phone = document.querySelector("#phone").value;
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let phoneRegex = /^[0-9]{10}$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email.");
                event.preventDefault();
            }

            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                event.preventDefault();
            }
        });
    }
});
