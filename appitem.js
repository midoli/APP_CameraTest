Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    fullscreen: true,
    name: 'CaremaTest',
    views: [
        'MainItem'
    ],
    controllers: [
        
    ],
    stores: [
    ],
    launch: function () {
        Ext.create('CaremaTest.view.MainItem');
    }
});
