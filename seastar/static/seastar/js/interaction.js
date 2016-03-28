$(document).ready(function() {
  $('.zoom-point').click(function(){
    var clickCount = ($(this).attr('data-click-count')) ? parseInt($(this).attr('data-click-count')) : 1;
    clickCount++;
    if(clickCount > 3) {
      clickCount = 1;
    }
    var setImage = function(color, clickCount) {
      var id = "#" + color + clickCount + "x";
      $('.thumb-' + color +' img.active').removeClass('active');
      $(id).addClass('active');
    };
    $(this).attr('data-click-count', clickCount);
    var color = '';
    if($(this).hasClass('zoom-point-yellow')) {
      color = 'yellow';
    } else if($(this).hasClass('zoom-point-green')) {
      color = 'green';
    } else if($(this).hasClass('zoom-point-red')) {
      color = 'red';
    }
    setImage(color, clickCount);
  });
});
