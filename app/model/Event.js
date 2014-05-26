Ext.define("mmta.model.Event", {
    extend: "Ext.data.Model",
    config: {              
       fields:[
			{name:'id',type:'string'},
			{name:'summary',type:'string'},
			{name:'description',type:'string'},
			{name:'location',type:'string'},
			{name:'start',type:'datetime'},
			{name:'end',type:'datetime'}
		]
       
    }
}); 
