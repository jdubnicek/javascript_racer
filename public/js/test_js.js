$(document).ready(function() {
    //Reset
    $('#new_game').click(function() {
        $('td').removeClass();
        $('#finish_line_1').addClass('p1 active')



        $("tr td:first-child").addClass('active ');
    });

    // // Advance through track
    $('body ').bind('keypress ', function(event) {
        if (event.keyCode == 113) {
            $('td.p1 ').next().addClass('p1 active ');
            $('td.p1 ').prev().removeClass('p1 active ');
        };
        if (event.keyCode == 112) {
            $('td.p2 ').next().addClass('p2 active ');
            $('td.p2 ').prev().removeClass('p2 active ');
        };

        // Determine Winner
        var winner1 = $('
                    # finish_line_1 ').hasClass("p1");
        console.log("player 1 winner? " + winner1);

        var winner2 = $('
                    # finish_line_2 ').hasClass("p2");
        console.log("player 2 winner? " + winner2);

        if (winner1 || winner2) {
            $('body ').unbind('keypress ');
            if (winner1) {
                $('.winner ').replaceWith('<div id = "winner" class= "winner"> Player 1 Wins(your soul)</div>')
            } else {
                $('.winner').replaceWith('<div id="winner" class="winner">Player 2 Wins (your dog)</div > ')
            }
        };
    });
    $('.finish_line_1, .finish_line_2 ').css("background-color", "red");
});
