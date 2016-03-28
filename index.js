module.exports = function (element, parentselector) {
    if ( !parentselector && 'string' === typeof element ) {
        parentselector = element
        element = this
    }
    var selectors = parentselector.split(/(?=[#\.])/),
        tagname = selectors.shift()

    return parentNodeUp(element)

    function parentNodeUp (et) {
        return (tagname.toLowerCase() === et.tagName.toLowerCase()) && selectorMatchAll(selectors)
            ? et: parentNodeUp(et.parentNode)

        function selectorMatchAll(selectors) {
            if ( 0 === selectors.length ) { return true }
            return selectors.reduce(function (lastselectormatched, selector) {
                return !lastselectormatched || !selectorMatch(selector)? false: true
            }, true) // start with lastselectormatched is true

            function selectorMatch(selector) {
                var selectorparts = selector.split(/^([#\.])/).splice(1)
                var selregex = new RegExp('\\b' + selectorparts[1] + '\\b', 'i')
                switch ( selectorparts[0] ) {
                    case '#': return selectorparts[1].toLowerCase() === et.id.toLowerCase()
                        break
                    case '.': return et.className.match(selregex)
                        break
                }
            }
        }
    }
}

