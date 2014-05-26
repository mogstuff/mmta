Ext.define("mmta.view.EventsList", {
    extend: "Ext.dataview.List",
    alias: "widget.eventslist",
    xtype: 'eventslist',
    
    config: {
		store:'Events',
        loadingText: "Loading Events...",
         styleHtmlContent: true,
        emptyText: '<pre>No Events Found</pre>',
        onItemDisclosure: false,
        itemTpl: '<pre><p>{summary}<br/>{start} - {end} </br>{description}</p></pre>',
    }
});

