/*
Lightstamp v.1.0.0
http://github.com/ctl/lightstamp
*/
(function(root, factory) {
    (typeof module === "object" && module.exports) ? module.exports = factory(): root.Lightstamp = factory();
}(this, function() {
    function updateTimestamps() {
        var els = document.getElementsByTagName("*"),
            i = els.length
        while (i--) {
            if (els[i].dataset['timestamp']) {
                els[i].innerHTML = moment.unix(els[i].dataset['timestamp']).fromNow()
            }
        }
    }
    updateTimestamps();
    setInterval(function() {
        updateTimestamps()
    }, 10000)
}))