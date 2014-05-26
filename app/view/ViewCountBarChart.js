Ext.define('mmta.view.ViewCountBarChart', {
    extend: 'Ext.Panel',
    xtype: 'viewcountbarchart',

    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Category'
    ],

    config: {
        cls: 'card1',
        layout: 'fit',
        items: [
        
        {
			xtype: "toolbar",
					title: 'MMTA (Morecambe Muay Thai Assocation) Top 5 Viewed Videos',
					docked: "top",
					items: [],	
			},

        
            {
                xtype: 'chart',
                store: 'Videos',
                background: 'white',
                flipXY: true,

                colors: [
                'blue', 'yellow', 'red', 'green', 'gray'
                    //"blue"
                ],
                

                series: [
                    {
                        type: 'bar',
                        xField: 'title',
                        yField: ['viewCount'],
                                              
                        
                         renderer: function(sprite, record, attributes, index, store) {
													  var colors = ['blue', 'yellow', 'red', 'green', 'gray'];
													attributes.fill = colors[index%colors.length];
													return attributes;
													}
                        
                    }
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'left',
                        fields: 'title'
                    }
                ]
            }
        ]
    }
});
