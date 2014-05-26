Ext.define("mmta.controller.Events", {
    extend: "Ext.app.Controller",
    launch: function () {
     this.callParent();
	var test =   Ext.getStore("Events").load();
	console.log(test);        
    },
    init: function () {
        this.callParent();
        console.log("init");
    }
});
