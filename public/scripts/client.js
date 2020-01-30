jQuery(function($) {
    $('form').on('submit', postTweetToServer);
    getTweetsFromServer();
    $( '.fa-angle-double-down' ).click(function() {
        $( "#section_to_hide" ).slideToggle( "2000" );
      });
    
}) 
