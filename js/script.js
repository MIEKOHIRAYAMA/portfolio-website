console.log("Hello World, I'm Mieko");



(() => {
    $(document).ready(() => {
       
      $('.hamburger-menu-button').click(() => {
        $('ul').toggleClass('show-menu-item');
      })
    });
  })();