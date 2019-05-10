
$( document ).ready(function() {
    $(".arrow").on("click", function(e){
        var idx = $(this).parents('tr:first').index()-1;
        var list =$('.count-objects');
        var offset = $(this).parents('tr:first').offset();
         if ($( ".detail-about-clients" ).length===0){
            $('tr').fadeTo( "slow", 0.5 );
            $(this).parents('tr:first').fadeTo( "slow", 1 );
            $(".detail-about-clients").removeClass('hide').addClass('active');
            $(".detail-about-clients").offset({ top: 10, left: 0}).fadeTo( "fast", 1 );
            $('.table > tbody > tr').eq(idx+1).after("<tr class='detail-about-clients'><td colspan='5'><div><div class='about-clients-title'>Объекты клиента</div>"+
            "<p>всего объектов 2</p><div class='objects'>ОБЪЕКТ</div>"+
            "<div class='count-objects'></div>"+
            "<div><a class='button-panel' href='№'><img src='img/card.png' alt=''> перейти в карточку</a><span class='hide-details'>скрыть детали</span></div></div> </td></tr>");
            $.getJSON("clients.json", function(data){
                $.each(data.members[idx].object, function (index, value) {
                    $('.count-objects').append("<div class='objects'>"+value+"</div>");
                });
            
            });
        }
        else{
            $('table>tbody').children('.detail-about-clients').remove();
            $('tr').fadeTo( "slow", 1 );
        }
    });
    $(".table").on("click", ".hide-details",function(e){
        $('table>tbody').children('.detail-about-clients').remove();
        $('tr').fadeTo( "slow", 1 );
    });

});
