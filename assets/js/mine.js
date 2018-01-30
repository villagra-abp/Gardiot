
  $('.popuptw').click(function(event) {
    var width  = 600,
        height = 640,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2, 
        url    = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fgardiot.ovh%2Flanding%2F&text=Gardiot,%20jardiner%C3%ADa%20inteligente%20al%20alcance%20de%20tu%20mano&via=SymbioseTeam",
        opts   = 'status=1' + 
                 ',width='  + width  + 
                 ',height=' + height +
                 ',top='    + top    + 
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;

  });

    $('.popupfb').click(function(event) {
    var width  = 600,
        height = 640,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2, 
        url    = "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgardiot.ovh%2Flanding%2F",
        opts   = 'status=1' + 
                 ',width='  + width  + 
                 ',height=' + height +
                 ',top='    + top    + 
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;

  });
