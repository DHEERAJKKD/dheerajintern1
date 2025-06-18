const passwordModal = document.querySelector('.modal');
const passwordInput = document.querySelector('.modal input');
const unlockBtn = document.querySelector('.modal button');
const notesSection = document.querySelector('.notes');

// Open password modal
function openPasswordModal() {
  passwordModal.style.display = 'flex';
}

// Close password modal
function closePasswordModal() {
  passwordModal.style.display = 'none';
}

// Unlock notes
function unlockNotes(password) {
  // Validate password
  if (password === 'secret') {
    notesSection.style.filter = 'blur(0px)';
  } else {
    alert('Incorrect password');
  }
}

// Check password when modal is opened
openPasswordModal();

// Submit password
unlockBtn.addEventListener('click', () => {
  unlockNotes(passwordInput.value);
  closePasswordModal(); 
});