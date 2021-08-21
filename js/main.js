$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUP = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var currentFlat = 1;
  var flatPath = $(".modal-image path");
  var flatLink = $(".modal-info .flat-link");

  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");
    floorPath.removeClass("current-floor");
    $("[data-floor=" + currentFloor + "]").toggleClass("current-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);

  counterUP.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $("[data-floor=" + usCurrentFloor + "]").toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $("[data-floor=" + usCurrentFloor + "]").toggleClass("current-floor");
    }
  });

  flatPath.on("mouseover", function () {
    currentFlat = $(this).attr("data-flat");
    toggleCurrenFllat();
  });

  flatLink.on("mouseover", function () {
    currentFlat = $(this).attr("data-flat_description");
    toggleCurrenFllat();
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }

  function toggleCurrenFllat() {
    flatLink.removeClass("current-flat-link");
    flatPath.removeClass("current-flat");
    $("[data-flat_description=" + currentFlat + "]").toggleClass("current-flat-link");
    $("[data-flat=" + currentFlat + "]").toggleClass("current-flat");
  }
});