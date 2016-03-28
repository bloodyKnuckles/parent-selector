var parentNodeSelector = require('../')
var vdom = require('virtual-dom/h')
var create = require('virtual-dom/create-element')
var test = require('tape')

test('chain parentNodeSelector to other methods on object', function (tt) {
    tt.plan(1)

    var parentelem = create(vdom('div', [
        vdom('div', { id: 'parentid' }, [
            vdom('h1', { className: 'notme' }, 'clicked # times'),
            vdom('button', { id: 'myid', onclick: function () { console.log('hey') } }, 'click me!')
        ])
    ]))
    var elem = parentelem.childNodes[0]
    elem.parentNodeSelector = parentNodeSelector

    tt.deepEqual(elem.parentNodeSelector('div').id, 'parentid') //parentelem)
})
