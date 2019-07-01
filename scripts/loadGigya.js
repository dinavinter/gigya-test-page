loadGigya();

function loadGigya() {
    var url = new URL(window.location.href);
    var apiKeyParam = url.searchParams.get("apiKey");
    var domainParam = url.searchParams.get("domain");

    if (apiKeyParam) {
        apiKey = apiKeyParam;
    }
    if (domainParam) {
        domain = domainParam
    }

    if(!domain)
    {
        domain ="us1";
    }
 
    if(!apiKey)
    {
        apiKey ="3_oRTIvacLBxFnpYv0RZjieQllQz8s_VW7x_UoTzb_gU5hz47Dim5KrL-2swhojLn7";
    }

    var gigurl = ("https://cdns." + domain + ".gigya.com/js/socialize.js?apikey=" + apiKey);
    document.write('<scr' + 'ipt type="text/javascript" src="' + gigurl + '"></scr' + 'ipt>');


 
}