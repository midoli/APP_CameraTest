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
						 
						 var myObject, afile, size;
						 myObject = new ActiveXObject("Scripting.FileSystemObject");
						 afile = myObject.GetFile(imageURI)
						 size = afile.Size;
						 alert(size);
						 //var xhr = new XMLHttpRequest();
						 //xhr.open('POST', '/SP_Upload/DDRoomFileupload.ashx?FolderUrl=' + encodeURIComponent($("#html_folder").val()));
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