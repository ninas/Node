
var urlSubmitted = function(event){
    if (event.which === 13){
        event.preventDefault();
        var testing = $('.testing');
        var urlVal = $(this).val();
        $.ajax({ 
            url: '/save',
            data: { 'url': urlVal},
            success: function(rsp) {
                testing.text(rsp);
            }
        });
    }
};

$(document).ready(function() {
    $('.url_text').keypress(urlSubmitted);
});
