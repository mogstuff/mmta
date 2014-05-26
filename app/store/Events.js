Ext.define("mmta.store.Events", {
    extend: "Ext.data.Store",
    config: {
        proxy: {
            type: 'ajax',
            url: 'gcalendar.php',
           model: 'mmta.model.Event',
            reader: {
                type: "json",
                rootProperty: "items" //"items"
            }
        },
        autoLoad: true
    }
});
