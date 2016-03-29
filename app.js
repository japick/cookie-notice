(function($, document) {

   var thinklab = {

      cache: function() {
         thinklab.els = {};
         thinklab.vars = {};

         thinklab.els.$window = $(window);
         thinklab.els.$document = $(document);

         thinklab.vars.$cookieNotice = $('#cookieNotice');
      },

      on_ready: function() {
         thinklab.cache();
         thinklab.on_load();
      },

      on_load: function() {
         thinklab.els.$window.load( function() {
            thinklab.showCookieNotice();
            thinklab.addCookie();
         });
      },

      showCookieNotice: function() {
         if(Cookies.get('thinklabCookieNotice')) {
            thinklab.vars.$cookieNotice.hide();
         } else {
            thinklab.vars.$cookieNotice.show();
         }
      },

      addCookie: function() {
         var btn = $('#addCookie');

         btn.on('click', function() {
            Cookies.set('thinklabCookieNotice', 'true', { expires: 7 });
            thinklab.vars.$cookieNotice.hide();
            return false;
         });
      },

   };

	$(document).ready(thinklab.on_ready());

}(jQuery, document));
