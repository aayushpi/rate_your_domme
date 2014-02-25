/**
 * scripts.js
 */
(function($) {

  $(window).load(function(){
  var sectionHeight = window.innerHeight;
  $('section').css('height',sectionHeight);
  });
  var content = ['BDSM doesn&rsquo;t have to be scary (unless you&rsquo;re into that)', 'BDSM doesn&rsquo;t have to be scary (unless you&rsquo;re into that)'];
  var arr = Math.floor((Math.random()*2));
  $(document).ready(function(){
    $('#lead h2').html(content[arr]);
    $('#lead h2').delay(1000).fadeIn(500, function(){
      $('nav').fadeIn(500);
    });
  });
$('#lead nav ul li a').click(function(){
  var reveal = ($(this).attr('href'));
  $(reveal).fadeIn(350);
});

}(jQuery));
