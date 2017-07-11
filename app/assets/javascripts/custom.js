$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper-container', {

   loop: true,

   pagination: '.swiper-pagination',
   paginationClickable: true,
 })

 $(".sortable").sortable({
		 update: function() {
			 $.post($(this).data("update-url"), $(this).sortable('serialize'))
		 }
	 });
});
