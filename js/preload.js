(function() {


var preload = getElementById("preload");
var loading = 0;
var id = setInterval(frame, 64 );

function frame(){

    if (loading == 100){
        clearInterval(id);
        window.open("preload.html" );
    } else {
        loading = loading + 1;
        if (loading == 90) {
            preload.style.animation = ""; 

        }
    }
}

})();

