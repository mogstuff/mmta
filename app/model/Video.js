Ext.define("mmta.model.Video", {
    extend: "Ext.data.Model",
    config: {       
       
       fields:[
			{name:'id',type:'string'},			
			{name:'title',type:'string'},
			{name:'thumbnail',type:'string'},
			{name:'href',type:'string'},
			{name:'viewCount',type:'int'}
		]
       
    }
});

