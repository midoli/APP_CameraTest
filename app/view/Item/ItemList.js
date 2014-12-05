Ext.define('CaremaTest.view.Item.ItemList', {
    extend: 'Ext.List',
    xtype: 'Itemlist',
    config: {
        store: 'Item',
        itemTpl: new Ext.XTemplate(
              '<div style="">',
			  '<img src="http://acerpsgdemo.midolitech.net:8080/Shared%20Documents/{名稱}" width=300/>',
			  '</div>'),
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
					
			}
        } 
    } 
});