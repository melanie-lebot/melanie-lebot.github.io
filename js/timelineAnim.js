$(function(){
  var items = $(".timeline-panel");
  function isElemInView(elem)
  {
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = $(elem).offset().top;
    bounds.bottom = bounds.top + $(elem).outerHeight();
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElemInView(items[i])) {
        $(items[i]).stop().animate({opacity: 1});
      }
      else
      {
        $(items[i]).stop().animate({opacity: 0});
      }
    }
  }
  $( window ).scroll(function(){
    callbackFunc()
  });
});
