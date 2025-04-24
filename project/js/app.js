document.addEventListener("DOMContentLoaded", function () {
    // Define the navigation links and their corresponding sections
    const navLinks = [
        { text: "Home", href: "#home" },
        { text: "News", href: "#news" },
        { text: "Contact", href: "#contact" },
        { text: "About", href: "#about" }
    ];

    const navBar = document.getElementById("navBar");

    // Dynamically generate the navigation links and add them to the navbar
    navLinks.forEach((link, index) => {
        const a = document.createElement("a");
        a.textContent = link.text;
        a.href = link.href;

        // Set the first link as "active" by default
        if (index === 0) {
            a.classList.add("active");
        }

        // Append each link to the navigation bar
        navBar.appendChild(a);
    });

    // Smooth scrolling effect when a navigation link is clicked
    navBar.addEventListener("click", function (e) {
        // Only handle clicks on links (a tags)
        if (e.target.tagName.toLowerCase() === "a") {
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll smoothly to the target section
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });

    // Update the active section based on scroll position
    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        let activeSection = null;

        // Check which section is currently in the viewport
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                activeSection = section;
            }
        });

        // Remove the 'active-section' class from all sections
        sections.forEach(section => section.classList.remove("active-section"));

        // Add the 'active-section' class to the currently visible section
        if (activeSection) {
            activeSection.classList.add("active-section");
        }

        // Highlight the corresponding navigation link based on the active section
        const navLinks = document.querySelectorAll(".topnav a");
        navLinks.forEach(link => {
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Toggle the 'active' class on navigation links based on the active section
            if (activeSection === targetSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    // Comment form submission logic
    const postButton = document.getElementById('postButton');
    const nameInputField = document.getElementById('nameInput');
    const emailInputField = document.getElementById('emailInput');
    const commentInputField = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    postButton.addEventListener('click', function () {
        const nameInput = nameInputField.value.trim();
        const emailInput = emailInputField.value.trim();
        const commentInput = commentInputField.value.trim();
        
        // Regex pattern to validate email address format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Validate form inputs: all fields must be filled and email must be valid
        if (!nameInput || !emailInput || !commentInput) {
            alert('Please fill in all fields!');
        } else if (!emailPattern.test(emailInput)) {
            alert('Please enter a valid email address!');
        } else {
            // Create a new div for the comment
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<strong>${nameInput}</strong> (${emailInput}) says: <p>${commentInput}</p>`;
            
            // Append the new comment to the comments list
            commentsList.appendChild(commentDiv);

            // Clear the input fields after the comment is posted
            nameInputField.value = '';
            emailInputField.value = '';
            commentInputField.value = '';
        }
    });
});
