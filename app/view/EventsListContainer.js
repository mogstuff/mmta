Ext.define("mmta.view.EventsListContainer", {
    extend: "Ext.Container",
    alias: "widget.eventslistcontainer",
    xtype: 'eventslistcontainer',

    initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'MMTA (Morecambe Muay Thai Assocation) Class Times',
            docked: "top",
            items: [
                { xtype: 'spacer' },                
            ]
        };
     
        
        var videosList = {
    xtype: "eventslist",
    store: Ext.getStore("Events"),
    listeners: {
        disclose: { fn: this.onVideosListDisclose, scope: this }
    }
    
    
};
       

        this.add([topToolbar, videosList]);
    },
    
    onVideosListDisclose: function (list, record, target, index, evt, options) {
	console.log('list tap thingy fired');
 //   console.log("editBookCommand");
  //  this.fireEvent('editBookCommand', this, record);
},
    
    
    config: {
        layout: {
            type: 'fit'
        }
    }
});

