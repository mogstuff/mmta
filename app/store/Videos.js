Ext.define("mmta.store.Videos", {
    extend: "Ext.data.Store",
    config: {
        proxy: {
            type: 'ajax',
            url: 'videos.php',
            model: 'mmta.model.Video',
            reader: {
                type: "json",
                rootProperty: "data" //"items"
            }
        },
        autoLoad: true
    }
});
