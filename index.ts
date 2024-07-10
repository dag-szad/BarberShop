function toggleMobileMenu() {
  const mobileOverlay = document.getElementById('overlay') as HTMLElement;
  const mobileContent = document.getElementById('mobileMenu') as HTMLElement;

  mobileOverlay.classList.toggle('opacity-0');
  mobileOverlay.classList.toggle('opacity-100');
  mobileOverlay.classList.toggle('pointer-events-none');

  mobileContent.classList.toggle('translate-x-full');
  mobileContent.classList.toggle('translate-x-0');

  document.body.style.overflow = mobileOverlay.classList.contains('opacity-0') ? 'auto' : 'hidden';

  if (!mobileOverlay.classList.contains('opacity-0')) {
    mobileOverlay.addEventListener('click', handleOverlayClick);
  } else {
    mobileOverlay.removeEventListener('click', handleOverlayClick);
  }
}

function handleOverlayClick(event: MouseEvent) {
  const mobileOverlay = event.currentTarget as HTMLElement;
  const mobileContent = document.getElementById('mobileMenu') as HTMLElement;
  if (event.target === mobileOverlay) {
    toggleMobileMenu();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('mobileMenuOpen') as HTMLElement;
  const closeButtons = document.querySelectorAll('.mobileExitButton');

  openButton.addEventListener('click', toggleMobileMenu);
  closeButtons.forEach((button) => {
    button.addEventListener('click', toggleMobileMenu);
  });
});
