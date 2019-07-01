function errorHandler(e) {
    console.log(e);
    document.getElementById('div').innerHTML = "<pre>"+JSON.stringify(e, undefined, 2)+"</pre>";

}


  
function showComment() {
 var params ={
	categoryID: '1',
	streamID: '',
	version: 2,
	containerID: 'div',
	cid:'',
	enabledShareProviders: 'facebook,twitter,yahoo,linkedin'
}
gigya.comments.showCommentsUI(params);
}



  
function afterLiteRegistration(eventObj) {
    if (eventObj.response.errorCode == 0) {
        var email = eventObj.profile.email;
        var  inviteRef= "https://accounts."+domain+".gigya.com/accounts.sendLiteInvite?apiKey="+apiKey+"&email=" + encodeURIComponent(email);

         document.getElementById('div').innerHTML = "<br/><br/><br/>"+
         `<center> <a href="${inviteRef}" target="_blank">Edit your preferences</a>  </center>`+

        '<center> <a onclick="showRegistration()" href="javascript:void(0);">Complete your account</a>  </center>';
     
    }
    else
    {
        errorHandler(eventObj.response)
    }
} 

function invite(email ){

    fetch(inviteRef), {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin'       
     }.then(errorHandler).catch(errorHandler)
  }


function showGetAccountInfoResponse(response) {
    document.getElementById('div').innerHTML = "<pre>"+JSON.stringify(response, undefined, 2)+"</pre>";
 }

 function showResponse(eventObj) {
    if (eventObj.response.errorCode == 0) {
        document.getElementById('div').innerHTML = "<center>Logged in UID: "+ eventObj.response.UID+"</center>";
    }
}
 

function logout() {
    gigya.socialize.logout({onError: errorHandler, callbac:showGetAccountInfoResponse})
}

function addConnection(){
    gigya.socialize.showAddConnectionsUI();
}

function showLiteRegistration( ) {
 
    var params = {
        screenSet: "Default-LiteRegistration",
        containerID: "div",
        onAfterSubmit: afterLiteRegistration,
        onError: errorHandler
    }
    gigya.accounts.showScreenSet(params);
}


function showPrivacy() {
    var params = {
        screenSet: "Default-ProfileUpdate",
        containerID: "div",
        startScreen: "gigya-privacy-screen"
    }
    gigya.accounts.showScreenSet(params);
}

function showCommunication() {
    var params = {
        screenSet: "Default-ProfileUpdate",
        containerID: "div",
        startScreen: "gigya-communication-screen"
    }
    gigya.accounts.showScreenSet(params);
}

function showProfile() {
    var params = {
        screenSet: "Default-ProfileUpdate",
        containerID: "div",
        startScreen: "gigya-update-profile-screen",
        conflictHandling: "saveProfileAndFail"
    }
    gigya.accounts.showScreenSet(params);
}
 
function showAccountJson() { 

    var url = new URL(document.location);
    var regToken = url.searchParams.get("gig_regToken");
     if(regToken){

    gigya.accounts.getAccountInfo({ callback:showGetAccountInfoResponse, regToken: regToken, include: "all" });
     }
    else{
        gigya.accounts.getAccountInfo({ callback:showGetAccountInfoResponse, include: "all" });

    }

}


function showGetUserInfoJson() { 

    var url = new URL(document.location);
    var regToken = url.searchParams.get("gig_regToken");
    
     if(regToken){
    gigya.socialize.getUserInfo({ callback:showGetAccountInfoResponse, regToken })
    }
    else{
        gigya.socialize.getUserInfo({ callback:showGetAccountInfoResponse  });

    }
};
 
function showRegistration() {
    var params = {
        screenSet: "Default-RegistrationLogin",
        containerID: "div",
        startScreen: "gigya-register-screen",
        onAfterSubmit: showResponse

    }
    gigya.accounts.showScreenSet(params);
}

 
function showLogin() {
    var params = {
        screenSet: "Default-RegistrationLogin",
        containerID: "div", 
        onAfterSubmit: showResponse

    }
    gigya.accounts.showScreenSet(params);
}

