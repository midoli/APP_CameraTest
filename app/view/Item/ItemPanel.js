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
						  var url=encodeURI("http://sps2013-dev/SP_Upload/DDRoomFileupload.ashx?FolderUrl=");
						  //var username='your_user';
						  //var password='your_pwd';


						  var params = new Object();
							params.your_param_name = "something";  //you can send additional info with the file

							var options = new FileUploadOptions();
							options.fileKey = "the_name_of_the_image_field"; //depends on the api
							options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
							options.mimeType = "image/jpeg";
							options.params = params;
							options.chunkedMode = true; //this is important to send both data and files

							//var headers={'Authorization':"Basic " + Base64.encode(username + ":" + password)};
							//options.headers = headers;

							var ft = new FileTransfer();
							ft.upload(imageURI, url, function(){alert("suc");}, function(){alert("err");}, options);

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