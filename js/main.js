//Doc Ready Start
$(document).ready(function() {


	$('.swap').click(function() {
        $(this).find(".text").toggle();
        $(this).parent().find('.slidingDiv').slideToggle();
        return false;
    });

});// Doc Ready End

