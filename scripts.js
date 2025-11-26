(function () {
  const btn = document.querySelector('button[aria-label="Scroll down"]');
  const target = document.getElementById('folders');
  if (!btn || !target) return;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const first = target.querySelector('.icon-wrapper');
    if (first) first.setAttribute('tabindex', '-1');
    if (first) first.focus({ preventScroll: true });
  });
})();

function openImage(src) {
  document.getElementById("popupImg").src = src;
  document.getElementById("imagePopup").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeImage() {
  document.getElementById("imagePopup").classList.add("hidden");
  document.body.style.overflow = "auto";
}