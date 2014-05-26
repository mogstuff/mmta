Ext.define("mmta.view.VideosList", {
   // extend: "Ext.dataview.List",
    extend: "Ext.List",
    alias: "widget.videoslist",
    xtype: 'videoslist',
    
    config: {
		store:'Videos',
        loadingText: "Loading Videos...",
         styleHtmlContent: true,
        emptyText: '<pre>No Videos Found</pre>',
        onItemDisclosure: true,
        itemTpl: '<pre><h2>{title}</h2><p><img src="{thumbnail}" /></p><p>View Count {viewCount}</p><i>Tap the arrow on the right to view video</i></pre>',
    }
});

