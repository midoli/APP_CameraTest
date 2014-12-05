Ext.define('CaremaTest.store.Item', {
    extend: 'Ext.data.Store',
    requires: ['CaremaTest.model.Item', 'Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        pageSize: 100,
        model: 'CaremaTest.model.Item',
        proxy: {
            type: 'ajax',
            url: 'http://acerpsgdemo.midolitech.net:8080/_vti_bin/listdata.svc/',
            headers: { "Accept": "application/json;odata=verbose" },
            cache: false,
            extraParams: {
                //$orderby: "修改時間 desc",
                $filter: ""
            },
            reader: {
                type: 'json',
                rootProperty: 'd'
            }
        }
    }
});
