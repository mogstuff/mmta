Ext.define("mmta.controller.Videos", {
    extend: "Ext.app.Controller",
    
    config: {
		refs: { 
			videoListContainer: 'videoslistcontainer',
			listView: 'videoslist',
			videoPanel : 'videopanel',
			             mainView: "main",

			},
			
			
			slideLeftTransition: { type: "slide", direction: "left" },
        
        slideRightTransition: { type: "slide", direction: "right" },
			
			control: {
            
				videoListContainer: { 	viewVideoCommand: "onViewVideoCommand" 	},
					
				videoDetailsPanel:	{ backToHomeCommand: "onBackToHomeCommand"
	}
				
				
            
			}
			
		
		},
    
    
    onViewVideoCommand: function (list, record) {
        console.log("onViewVideoCommand firing from controller");
        console.log(record.get('id'));
		var videoPanel = Ext.create('mmta.view.VideoPanel');
		//videoPanel.setRecord(record);
		videoPanel.setData({id:record.get('id'),title:record.get('title'), thumbnail:record.get('thumbnail'), ahref:record.get('href')});
		Ext.Viewport.setActiveItem(videoPanel);		 
    },
    
    
    activateVideoDetailView: function (record) {
		console.log('activateVideoDetailView fired in controller');
		var videoPanel = this.getVideoPanel();
		console.log(videoPanel);		
   },
    
    onBackToHomeCommand: function () {

console.log("onBackToHomeCommand");
this.activateVideosList();
},

activateVideosList: function () {
	console.log('activateVideosList firing' );
   // Ext.Viewport.animateActiveItem(this.getMainView(), this.getSlideRightTransition());
    Ext.Viewport.animateActiveItem(this.getVideosListContainer(), this.getSlideRightTransition());

},

    
    launch: function () {
        this.callParent();
           this.callParent(arguments);
			Ext.getStore("Videos").load();
        
    },
    init: function () {
        this.callParent();
    }
});
