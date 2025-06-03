 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Clear previous messages
    let hasError = false;
    // const nameInput = document.getElementById('name');
    // const emailInput = document.getElementById('email');
    // const messageInput = document.getElementById('message');
    // const nameError = document.getElementById('nameError');
    // const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    // Validate Name: not empty
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      hasError = true;
    }

    // Validate Email: not empty and correct format
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Please enter your email.';
      hasError = true;
    } else {
      // Regex for basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
      }
    }

    // Validate Message: not empty
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Please enter your message.';
      hasError = true;
    }

    if (!hasError) {
      formSuccess.textContent = 'Thank you for contacting us! Your message has been sent.';
      // Optionally reset the form
      this.reset();
    }
  });