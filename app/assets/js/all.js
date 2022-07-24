$(document).ready(() => {
  $('.mobile-show').click(function (e) { 
    e.preventDefault();
    $('.header-menu').toggleClass('show');
  });
});