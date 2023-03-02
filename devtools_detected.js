(function() {
    'use strict';
    Object.getOwnPropertyNames(console).filter(function(property) {
        return typeof console[property] == 'function';
    }).forEach(function (verb) {
        console[verb] =function(){return 'Sorry, for security reasons...';};
    });
    window.addEventListener('devtools-opened', ()=>{
        // do some extra code if needed or ...
        // maybe even delete the page, I still like to add redirect just in case
        /*window.location.href+="#";
        window.document.head.innerHTML="";
        window.document.body.innerHTML="devtools, page is now cleared";*/
        for (let variable in window) {
           if (window.hasOwnProperty(variable)) {
               try {
                 window[variable]="devtools_detected";
                } catch (e) {
                 console.error(e);
                }                   
            }
         };
    });
    window.addEventListener('devtools-closed', ()=>{
        // do some extra code if needed
    });
    let verifyConsole = () => {
        var before = new Date().getTime();
        debugger;
        var after = new Date().getTime();
        if (after - before > 100) { // user had to resume the script manually via opened dev tools 
            window.dispatchEvent(new Event('devtools-opened'));
        }else{
            window.dispatchEvent(new Event('devtools-closed'));
        }
        setTimeout(verifyConsole, 100);
    }
    verifyConsole();        
})();
