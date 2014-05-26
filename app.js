Ext.application({
    name: 'mmta',

    requires: [
        'Ext.MessageBox', 
        'mmta.view.Info', 
        'mmta.view.VideosList', 
        'mmta.view.VideosListContainer',
        "mmta.view.ViewCountBarChart",
        "mmta.view.ViewCountPie",
        "mmta.view.MMTAMap",
        "mmta.view.VideoPanel", 
        'mmta.view.EventsList'
        
    ],
    
    controllers: ["Videos"],


models:[
	"Video", "Event",
],

stores:[
	'Videos',  "Events"
],
    views: [
        'Main', 
        'Info', 
        'VideosListContainer',
        'VideosList', 
        "ViewCountBarChart",
        "ViewCountPie",
        "MMTAMap", 
         "VideoPanel",
         'EventsList'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var mainView  = {
			xtype:"main"
			};

		var infoView = {
            xtype: "info"
        };
        
    
      Ext.Viewport.add([mainView, infoView]);
    
    
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
