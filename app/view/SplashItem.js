Ext.define('CaremaTest.view.SplashItem', {
    extend: 'Ext.Container',
    id: 'splashScreen',
    requires: [
        'CaremaTest.view.Item.ItemMain'
    ],

    config: {
        layout: {
            type: 'card'
        },
        activeItem: 0,
        items: [
        {
            xclass: 'CaremaTest.view.Item.ItemMain'
        }
        ]
    }
});
