let timer = null;
let counter = 5;
function accepted(){
    $("#accept"). addEventListener("click")
    if("#accept"="clicked"){
        $("#terms"). hide
    }
}
const goToTerms = () => {
    counter--; // decrement counter
    if (counter == 0) {
    window.location.href = "terms.html"; }
    else {
    $("#seconds").textContent() = counter; } // update seconds
    };
    const acceptTerms = () => {
        // code to accept terms goes here
    clearInterval( timer );
    $("#terms").setAttribute("class", "hidden");
    
    };
    document.addEventListener("DOMContentLoaded", () => {

    timer = setInterval( goToTerms, 2000 );
    $("#accept"). addEventListener("click", acceptTerms);
   

});