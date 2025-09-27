const imgModal = document.getElementById("img-modal");
const overlayModal = document.getElementById("overlay-modal");
const modal = document.getElementById("modal");
const CloseBtn = document.getElementById("close");

imgModal.addEventListener("click", () => {
  modal.classList.add("opened");
  overlayModal.classList.add("opened");
});

CloseBtn.addEventListener("click", () => {
  modal.classList.remove("opened");
  overlayModal.classList.remove("opened");
});


const imgDrawer = document.getElementById("img-drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlayDrawer = document.getElementById("overlay-drawer");
const drawer = document.getElementById("drawer");

imgDrawer.addEventListener("click", () => {
  drawer.classList.add("show");
  overlayDrawer.classList.add("show");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("show");
  overlayDrawer.classList.remove("show");
});