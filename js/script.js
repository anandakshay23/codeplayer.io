$('#htmlPanel').val("<p id='abc'> This is a paragraph </p>");
$('#cssPanel').val("#abc{color:green;}");
$('#javascriptPanel').val("document.getElementById('abc').innerHTML = 'Changed Via JavaScript';");


function updateOutput(){
    let firstLine = "<html><head><style type='text/css'>";
    let cssContent = $('#cssPanel').val();
    let secondLine = "</style></head><body>";
    let htmlContent = $('#htmlPanel').val();
    let thirdLine = "</body></html>";
    $("iframe").contents().find("html").html(firstLine+cssContent+secondLine+htmlContent+thirdLine);
    let jsContent = $('#javascriptPanel').val();
    document.getElementById("outputPanel").contentWindow.eval(jsContent);
}


$('.toggleButton').hover(function(){
    $(this).addClass('highlightedButton');
},
function(){
    $(this).removeClass('highlightedButton');
});


$('.toggleButton').click(function () { 
    $(this).toggleClass('active');
    $(this).removeClass('highlightedButton');

    let panelID= $(this).attr("id")+"Panel";
    $("#"+panelID).toggleClass("hidden");

    let numberOfActivePanel = 4-$('.hidden').length;

    $(".panel").width($(window).width()/numberOfActivePanel-5);
});

$(".panel").height($(window).height()-$("#header").height()-20);

$(".panel").width($(window).width()/2-5);

updateOutput();

$("textarea").on('change keyup paste', function() {
    updateOutput();
});
