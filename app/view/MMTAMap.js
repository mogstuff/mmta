Ext.define('mmta.view.MMTAMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'mmtamap',
 
    config: {
        layout: {
            type: 'fit'
        },       
        items: [

			{
			xtype: "toolbar",
					title: 'MMTA (Morecambe Muay Thai Assocation) Location',
					docked: "top",
					items: [],	
			},

            {
                xtype: 'map',
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
					   center : new google.maps.LatLng(54.06292 ,-2.82679), 
                    zoom: 14
                },
                useCurrentLocation: false
            }
        ]
    },
 
    initialize: function(){
        var me = this;
        me.callParent(arguments);
        this.initMap();
    },
 
    initMap: function(){
 
        var mapPanel = this.down('map');
        var gMap = mapPanel.getMap();
 
        var marker = new google.maps.Marker({
            map: gMap,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(54.05713, -2.81932),
			title:'Morecambe Muay Thai Association',
        });

 
var contentInfowindow = "<p>Morecambe Muay Thai Association<br/>Lancaster and Morecambe College<br/>Morecambe Road<br/>Lancaster</p>"

		var infowindow = new google.maps.InfoWindow({content: contentInfowindow});
		
		google.maps.event.addListener(marker, 'click', function() {
								infowindow.open(gMap,marker);
				});
				
		google.maps.event.addListener(marker,'click',function() {
  gMap.setZoom(14);
  gMap.setCenter(marker.getPosition());
  });		
				
		
    }
});
