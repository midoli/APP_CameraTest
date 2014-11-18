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
						{ quality: 90,
						 destinationType: Camera.DestinationType.FILE_URI,
						 sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
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