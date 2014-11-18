Ext.define('CaremaTest.view.MainItem', {
    extend: 'Ext.Container',
    requires: ['CaremaTest.view.SplashItem'],

    id: 'viewport',

    config: {
        layout: {
            type: 'card'
        },
        fullscreen: true,
        items: [
            {
                xclass: 'CaremaTest.view.SplashItem'
            }
        ],
    }
});
