// inside out project STEP-101

function init() {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      classie.add(header, "smaller");
    } else {
      if (classie.has(header, "smaller")) {
        classie.remove(header, "smaller");
      }
    }
  });

  $.ajax({
    method: 'get',
    url: 'assets\data\menu.json',
    datatype: 'json',
    success: function(data) {
        console.log('all is good');
        console.log(data.menu.lenght);
        console.log(data.menu);
        if (data.menu.lenght) > 0 {
          data.menu.foreach(function (data)){

            console.log(data.MenuName);
            console.log(data.Menulink);

            $('nav').append('<a href="' + data.menulink + '">' + data.menuname + '</a>');

          });
        }

    },
    error: function() {
      console.log('all is not good');

    }
  })




}


window.onload = init();
