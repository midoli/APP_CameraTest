Ext.define('CaremaTest.view.Item.ItemPanel', {
    extend: 'Ext.Panel',
    id: 'itempanel',
    config: {
        layout: 'fit',
        items: [
		{
            docked: 'top',
            xtype: 'toolbar',
            items: [
            {
                xtype: 'button',
				text: 'Camera',
				handler: function(btn) {
					navigator.camera.getPicture(
						uploadPhoto,
						function(message){
						 alert('Failed because: ' + message);
						},
						{ quality: 50,
						 destinationType: Camera.DestinationType.DATA_URL
					});
				}
            },
			{
                xtype: 'button',
				text: 'Upload',
				handler: function(btn) {
					
				}
            }]
        }
        ]
    }
});