(function (global){
    var ajaxUtils = {};

    //returns an HTTP request object
    function getRequestObeject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    //makes an ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest = function(url, responseHandler, isJsonResponse){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", url, true);
        request.send(null); //for POST only
    };

    function handleResponse(request, responseHandler, isJsonResponse){
        if((request.readyState == 4) && (request.status == 200)){
            if(isJsonResponse == undefined){
                isJsonResponse = true;
            }

            if(isJsonResponse){
                responseHandler(JSON.parse(request.responseText));
            }

            else{
                responseHandler(request.responseText);
            }
        }
    }

    global.$ajaxUtils = ajaxUtils;
})(window);