Ext.define('mmta.view.VideoPanel', {
   extend: 'Ext.Panel',
   xtype: 'videopanel',
   alias: 'widget.videopanel',
   
   config: {
      hideOnMaskTap: true,
      scrollable: false,
      tpl:'<h1>{title}</h1><p><img src="{thumbnail}" /></p><p><iframe width="560" height="315" src="http://www.youtube.com/embed/{id}" frameborder="0" allowfullscreen></iframe></p>',
      items: [
      			
           {
			xtype: "toolbar",
					title: 'MMTA (Morecambe Muay Thai Assocation)',
					docked: "top",
					items: [],	
			},      
      
      
      
      
           ]
  },
  
  initialize: function () {

        this.callParent(arguments);

        var backButton = {
            xtype: "button",
            ui: "back",
            text: "Back",
            handler: this.onBackButtonTap,
			scope: this
        };
        
        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                backButton
            ]
        };
        
        this.add([
            bottomToolbar
        ]);


        
	}, // ends init 
  
    onBackButtonTap: function () {
    console.log("backToHomeCommand");
    Ext.Viewport.setActiveItem('main');
    this.fireEvent("backToHomeCommand", this);
}
  

  
});
