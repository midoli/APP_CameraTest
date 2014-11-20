Ext.define('CaremaTest.store.Item', {
    extend: 'Ext.data.Store',
    requires: ['CaremaTest.model.Item', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'CaremaTest.model.Item',
        proxy: {
            type: 'jsonp',
            url: 'http://192.168.9.37/SP_Upload/DDRoomFile.ashx',
            extraParams: {
                FolderUrl: ''
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
