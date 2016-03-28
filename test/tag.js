var parentNodeSelector = require('../')
var vdom = require('virtual-dom/h')
var create = require('virtual-dom/create-element')
var test = require('tape')

test('find parent node by tag name', function (tt) {
    tt.plan(1)

    var parentelem = create(vdom('div', [
        vdom('h1', { class: 'myclass' }, 'clicked # times'),
        vdom('button', { id: 'myid', onclick: function () { console.log('hey') } }, 'click me!')
    ]))
    var elem = parentelem.childNodes[0]

    tt.deepEqual(parentNodeSelector(elem, 'div'), parentelem)
})
