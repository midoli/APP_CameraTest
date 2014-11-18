Ext.define('CaremaTest.view.Item.ItemMain', {
    extend: 'Ext.Panel',
    id: 'itemmain',
    requires: [
        'CaremaTest.view.Item.ItemPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [
        {
            xclass: 'CaremaTest.view.Item.ItemPanel'
        }]
    }
});
