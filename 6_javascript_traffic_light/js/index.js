//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {
    var stopButton = $("#stop-button");
    var stopLight = $("#stop-light");
    
    var slowButton = $("#slow-button");
    var slowLight = $("#slow-light");
    
    var goButton = $("#go-button");
    var goLight = $("#go-light");
    
    stopButton.click(turnOnStopLight);
    slowButton.click(turnOnSlowLight);
    goButton.click(turnOnGoLight);    
    
    function turnOnStopLight() {
        slowLight.removeClass("slow");
        goLight.removeClass("go");
        
        stopLight.addClass("stop");
    }
    
    function turnOnSlowLight() {
        stopLight.removeClass("stop");
        goLight.removeClass("go");
    
        slowLight.addClass("slow");
    }
    
    function turnOnGoLight() {
        stopLight.removeClass("stop");
        slowLight.removeClass("slow");
    
        goLight.addClass("go");
    }
})