Ext.define('CaremaTest.view.Item.ItemList', {
    extend: 'Ext.List',
    xtype: 'Itemlist',
    config: {
        store: 'Item',
        itemTpl: new Ext.XTemplate(
              '<div style="">',
			  '<img src="http://192.168.9.37/APlus_Test/Photo/{LinkFilename}" width=300/>',
			  '</div>'),
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
					
			}
        } 
    } 
});