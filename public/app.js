// $(document).on('click', function(){
//     alert("connected");
// });

// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })

// $('.popover-dismiss').popover({
//     trigger: 'focus'
//   })

//   $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   });


$(window).on("scroll", function (){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});