import $ from 'jquery';
import ('./scss/input.scss');

var openedCard = [];

$(".card").click(function() {
  var checkNum = checkCards();
  if (checkNum >= 2) {
    $(".back").hide();
    $(".front").show();
    $(".card").removeClass("active");
  }
  else {
    $(this).find(".back").toggle();
    $(this).find(".front").toggle();
    $(this).addClass("active");
    checkMatch();
  }
})

function checkCards() {
  var numActive = $(".active").length;
  return numActive;
}

function checkMatch() {
  var groot = 0;
  var children = $(".gameContainer").children();
  children.each(function() {
    if ($(".card").hasClass("alien")) {
      groot++;
      console.log(groot);
    }
  });
  var checkClass = $(this).className;
  console.log(checkClass);
}
