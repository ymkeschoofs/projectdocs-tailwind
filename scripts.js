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

function openMedia(element) {
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  const popupVideo = document.getElementById("popupVideo");


  popupImg.classList.add("hidden");

  if (popupVideo) {
    popupVideo.classList.add("hidden");
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }

  if (element.tagName === "IMG") {
    popupImg.src = element.src;
    popupImg.classList.remove("hidden");
  }

  if (element.tagName === "VIDEO" && popupVideo) {
    popupVideo.src = element.src;
    popupVideo.classList.remove("hidden");
    popupVideo.play();
  }

  popup.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}


function closeImage() {
  const popup = document.getElementById("imagePopup");
  const popupVideo = document.getElementById("popupVideo");

  popup.classList.add("hidden");

  if (popupVideo) {
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }

  document.body.style.overflow = "";
}
