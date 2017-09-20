function smoothScroll(anchorId){
  $('html, body').animate({
    scrollTop: $(anchorId).offset().top
  }, 800, function(){
    window.location.hash = anchorId;
});
};
