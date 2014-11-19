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
						{ 
						 quality: 30,
						 encodingType: Camera.EncodingType.PNG,
						 destinationType: Camera.DestinationType.FILE_URI  //DATA_URL, FILE_URI
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