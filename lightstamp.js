/*
Lightstamp v.1.0.0
http://github.com/ctl/lightstamp
*/
(function(root, factory) {
    (typeof module === "object" && module.exports) ? module.exports = factory(): root.Lightstamp = factory();
}(this, function() {
    function updateTimestamps() {
        var els = document.getElementsByTagName("*"), //Select each element on page
            i = els.length 
        while (i--) {
            if (els[i].dataset['timestamp']) { //Find elements that have data-timestamp attribute
                els[i].innerHTML = moment.unix(els[i].dataset['timestamp']).fromNow() //Update timeago
            }
        }
    }
        updateTimestamps(); //Do it!!!
    setInterval(function() { //Update it each second
        updateTimestamps();
    }, 1000)
}))
