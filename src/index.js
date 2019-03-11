import $ from 'jquery';
import ('./scss/input.scss');

$(".card").on("click", $(".front"), function() {
  $(".back").toggle();
});
