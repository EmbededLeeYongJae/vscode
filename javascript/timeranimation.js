let timer = null;
let puppyTop = 265;
let puppyLeft = 265;
let puppySpeed = 1;

$(function() {

    $("#accel").val("속도:"+puppySpeed);

    makeTimer("moveToTop", moveToTop);
    makeTimer("moveToBottom",moveToBottom);
    makeTimer("moveToLeft",moveToLeft);
    makeTimer("moveToRight",moveToRight);

    $("#pause").on("click", function() {
        pause();
    });    

    $("body").on("keydown", function(event) {
        if (event.keyCode==37) move("left")();
        if (event.keyCode==38) move("top")();
        if (event.keyCode==39) move("right")();
        if (event.keyCode==40) move("bottom")();
        if (event.keyCode==37 && event.keyCode==38) {
            move("left")();
            move("top")();
        }
        if (event.keyCode==37 && event.keyCode==40) {
            move("left")();
            move("bottom")();
        }
        if (event.keyCode==39 && event.keyCode==38) {
            move("right")();
            move("top")();
        }
        if (event.keyCode==39 && event.keyCode==40) {
            move("right")();
            move("bottom")();
        }                                
    });

    $("#accel").on("click", function() {
        puppySpeed++;
        $("#accel").val("속도:"+puppySpeed);
    });    

});

const makeTimer = function(id,f){
    $("#" + id).on("click", function() {
        pause();
        timer = setInterval(f, 5);
    });

};

const pause = function() {
    clearInterval(timer);
};

const move = function(direction){
    const max = 540;
    const min = 10;
    let puppyDir = null;
    switch(direction){
        case "top":
            puppyDir = puppyTop;
            displ = min;
            break;
        case "bottom":
            puppyDir = puppyTop;
            displ = max;
            direction = "top";
            break;
        case "left":
            puppyDir = puppyLeft;
            displ = min;
            break;
        case "right":
            puppyDir = puppyLeft;
            displ = max;
            direction = "left";
            break;
    }
    if(direction=="top" || direction=="left"){
        return function(){
            if (puppyDir >= displ) {
                puppyDir -= puppySpeed;
                $("#puppy").css(direction, puppyDir+"px");
            }
        };
    }else{
        return function(){
            if (puppyDir >= displ) {
                puppyDir -= puppySpeed;
                $("#puppy").css(direction, puppyDir+"px");
            }
        };
    }

}







