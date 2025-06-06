 document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.getElementById('btnCTAHero');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      // On click, scroll smoothly to top as a placeholder action
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // You can replace this with actual navigation or other functionality
      alert('Get Started clicked! Implement your action here.');
    });
  }
     });
  