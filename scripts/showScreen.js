showScreen();
function showScreen() {
    var url = new URL(window.location.href);
    var screensetParam = url.searchParams.get("screen-set");
    var screenIdParam = url.searchParams.get("screen-id");
 
    if (typeof(screensetParam) === 'undefined' || typeof(screenIdParam) === 'undefined' ) {
         return;
    }

    var params = {
        screenSet: screensetParam,
        startScreen: screenIdParam, 
        containerID: "div", 
        onError: errorHandler
    };
    gigya.accounts.showScreenSet(params);
   

}

function errorHandler(e) {
    console.log(e);
    document.getElementById('div').innerHTML = "<pre>"+JSON.stringify(e, undefined, 2)+"</pre>";

}

