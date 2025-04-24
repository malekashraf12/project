document.addEventListener("DOMContentLoaded", function() {
    const navLinks = [
      { text: "Home", href: "#home" },
      { text: "News", href: "#news" },
      { text: "Contact", href: "#contact" },
      { text: "About", href: "#about" }
    ];
  
    const navBar = document.getElementById("navBar");
  
    if (navBar) {
      navLinks.forEach((link, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
    
        a.textContent = link.text;
        a.href = link.href;
    
        if (index === 0) {
          a.classList.add("active");
        }
    
        li.appendChild(a);
        navBar.appendChild(li);
      });
    } else {
      console.error('The navBar element is missing from the DOM.');
    }
  });



document.addEventListener("DOMContentLoaded", function() {
    const postButton = document.getElementById('postButton');
    const nameInputField = document.getElementById('nameInput');
    const emailInputField = document.getElementById('emailInput');
    const commentInputField = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    if (postButton && nameInputField && emailInputField && commentInputField && commentsList) {
        postButton.addEventListener('click', function() {
            const nameInput = nameInputField.value.trim();
            const emailInput = emailInputField.value.trim();
            const commentInput = commentInputField.value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (!nameInput || !emailInput || !commentInput) {
                alert('Please fill in all fields!');
            } else if (!emailPattern.test(emailInput)) {
                alert('Please enter a valid email address!');
            } else {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<strong>${nameInput}</strong> (${emailInput}) says: <p>${commentInput}</p>`;
                commentsList.appendChild(commentDiv);
                nameInputField.value = '';
                emailInputField.value = '';
                commentInputField.value = '';
            }
        });
    } else {
        console.error('One or more required elements are missing from the DOM.');
    }
});