// --------------------to enable popovers in bootstrap 5

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
//-------------------------------------------------------
//---------------------popover dismiss
const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
}); //------------------------------------

$(".card").click(function () {
  console.log("clicked");
});
