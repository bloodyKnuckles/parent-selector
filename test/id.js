var parentNodeSelector = require('../')
var vdom = require('virtual-dom/h')
var create = require('virtual-dom/create-element')
var test = require('tape')

test('find parent node by tag name and id', function (tt) {
    tt.plan(2)

    var parentelem = create(vdom('div', { id: 'myparent' }, [
        vdom('h1', { class: 'myclass' }, 'clicked # times'),
        vdom('button', { id: 'myid', onclick: function () { console.log('hey') } }, 'click me!')
    ]))
    var elem = parentelem.childNodes[0]

    var pnode = parentNodeSelector(elem, 'div#myparent')

    tt.deepEqual(pnode, parentelem)
    tt.equal(pnode.id, 'myparent')
})
