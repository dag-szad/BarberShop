function toggleMobileMenu() {
    var mobileOverlay = document.getElementById('overlay');
    var mobileContent = document.getElementById('mobileMenu');
    mobileOverlay.classList.toggle('opacity-0');
    mobileOverlay.classList.toggle('opacity-100');
    mobileOverlay.classList.toggle('pointer-events-none');
    mobileContent.classList.toggle('translate-x-full');
    mobileContent.classList.toggle('translate-x-0');
    document.body.style.overflow = mobileOverlay.classList.contains('opacity-0') ? 'auto' : 'hidden';
    if (!mobileOverlay.classList.contains('opacity-0')) {
        mobileOverlay.addEventListener('click', handleOverlayClick);
    }
    else {
        mobileOverlay.removeEventListener('click', handleOverlayClick);
    }
}
function handleOverlayClick(event) {
    var mobileOverlay = event.currentTarget;
    var mobileContent = document.getElementById('mobileMenu');
    if (event.target === mobileOverlay) {
        toggleMobileMenu();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var openButton = document.getElementById('mobileMenuOpen');
    var closeButtons = document.querySelectorAll('.mobileExitButton');
    openButton.addEventListener('click', toggleMobileMenu);
    closeButtons.forEach(function (button) {
        button.addEventListener('click', toggleMobileMenu);
    });
});
