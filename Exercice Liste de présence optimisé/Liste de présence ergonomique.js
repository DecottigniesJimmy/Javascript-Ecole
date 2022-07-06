$("td").click(function() {
    $(this).toggleClass("red");
});

// changer plusieurs couleurs : var colours = ['green', 'orange', 'red'];

// $('td').click(function() {
//   var $cell = $(this);
//   var index = $cell.data('index') || 0;
//   $cell.css('background-color', colours[++index % colours.length]);
//   $cell.data('index', index);
// });




