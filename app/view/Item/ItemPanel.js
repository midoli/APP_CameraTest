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
						function(imageURI){
						 //alert(imageURI);
							$.getJSON( "http://192.168.9.37/SP_Upload/DDRoomFileupload.ashx?FolderUrl=",  {
								data: { image: imageURI }
							}).done(function(data) {
								if (data.sucess == true)
								{
								}
							}).fail(function() {
									alert('err');
							});
						},
						function(message){
						 alert('Failed because: ' + message);
						},
						{ quality: 90,
						 destinationType: Camera.DestinationType.FILE_URI
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