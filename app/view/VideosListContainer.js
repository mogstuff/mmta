Ext.define("mmta.view.VideosListContainer", {
    extend: "Ext.Container",
    alias: "widget.videoslistcontainer",
    xtype: 'videoslistcontainer',

    initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'MMTA (Morecambe Muay Thai Assocation) Top 5 Videos',
            docked: "top",
            items: [
                { xtype: 'spacer' },                
            ]
        };
        
        var videosList = {
    xtype: "videoslist",
    store: Ext.getStore("Videos"),
    listeners: {
        disclose: { fn: this.onVideosListDisclose, scope: this }
    }
    
    
};
       

        this.add([topToolbar, videosList]);
    },
    
    onVideosListDisclose: function (list, record, target, index, evt, options) {
	console.log("viewVideoCommand");
  //  this.fireEvent('editBookCommand', this, record);
   this.fireEvent('viewVideoCommand', this, record);
  
},
    
    
    config: {
        layout: {
            type: 'fit'
        }
    }
});
