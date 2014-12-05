Ext.define('CaremaTest.view.Item.ItemList', {
    extend: 'Ext.List',
    xtype: 'Itemlist',
    config: {
        store: 'Item',
        itemTpl: new Ext.XTemplate(
              '<div style="">',
			  '{EntitySets}',
			  '</div>'),
		listeners: {
            itemtap: function (list, index, target, record, e, eOpts) {
					
			}
        } 
    } 
});