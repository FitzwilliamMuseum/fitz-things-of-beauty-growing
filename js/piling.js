$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      verticalCentered: true,
      anchors: ['introduction', 'sponsors'],
      navigation: {
        'position': 'right',
        'tooltips': ['Introduction', 'Sponsors']
      },
      afterRender: function(){
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function(anchorLink, index){
        if(index>1){
          $('#pp-nav').removeClass('custom');
        }else{
          $('#pp-nav').addClass('custom');
        }
      }
    });
  });
  const button = document.querySelector("#button");
  const icon = document.querySelector("#button > i");
  const audio = document.querySelector("audio");
