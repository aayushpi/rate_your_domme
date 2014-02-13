/**
 * scripts.js
 */
(function($) {
  var content = ['BDSM doesn&rsquo;t have to be scary (unless you&rsquo;re into that)', 'BDSM doesn&rsquo;t have to be scary (unless you&rsquo;re into that)'];
  var arr = Math.floor((Math.random()*2));
  $(document).ready(function(){
    $('#lead h2').html(content[arr]);
    $('#lead h2').delay(1000).fadeIn(500, function(){
      $('nav').fadeIn(500);
      $('#explanation').fadeIn(500);
    });
  });

}(jQuery));
