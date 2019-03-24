function makeGrid (size) {
    for (i=0; i <size; i++) {
        for (j=0; j<size; j++) {
            $("#container").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(960/size);
    $(".grid").height(960/size);
};

function clearGrid () {
    $(".grid").remove();
};

function resizeGrid () {
    var newSize = prompt("Enter the new size ");
    clearGrid();
    makeGrid(newSize);
};

$(document).ready(function() {
    makeGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
    });



    $("#resize").click(function() {
        resizeGrid();

        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });

    $("#black").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });

    $("#colorful").click(function() {
        $(".grid").mouseover(function() {
            let randomColor ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
            $(this).css("background-color", randomColor);
        });
    });

    $("#eraser").click(function() {
        $(".grid").mouseover(function() {
            $(this).css("background-color", "white");
        });
    });

});


