Ext.define('mmta.view.ViewCountPie', {
    extend: 'Ext.Container',
    xtype: 'viewcountpie',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie'
    ],

    config: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
           
           {
			xtype: "toolbar",
					title: 'MMTA (Morecambe Muay Thai Assocation) Top 5 Viewed Videos',
					docked: "top",
					items: [],	
			},

           
            {
                flex: 1,
                id: 'leagueCmp',
                xtype: 'component',
                style: 'padding-left: 10px;',
                html: '<div class="finance-header">MMTA Video Viewcount</div>' 
                    
            },
            {
                flex: 1,
                height: '90%',
                xtype: 'polar',
                store: 'Videos',

                innerPadding: 5,
                colors: [
                    "rgba(37, 231, 78, 1)",
                    "rgba(38, 230, 166, 1)",
                    "rgba(49, 219, 230, 1)",
                    "rgba(75, 199, 242, 1)",
                    "rgba(28, 165, 252, 1)",                  
                ],
                series: [
                    {
                        type: 'pie',
                        field: 'viewCount',
                        labelField: 'viewCount',
                        
                         label:{
							/*display:'middle',
							orientation:'horizontal',*/
							field:'viewCount',
							font: '1em Trade Gothic LT Std Bold',
							contrast:true,
							disableCallout:true
						},                        
                        
                    }
                ]
            },
            {
                flex: 2,
                xtype: 'list',
                store: 'Videos',
                itemTpl: [
                    '<div class= "coloredRectangle"></div>',
                    '<div style="margin-left: 40px;">{title}',
                        '<div class="finance-value">{viewCount}</div>',
                    '</div>'
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        this.chart = this.down('polar');
        this.list = this.down('list');

        this.on({
            painted: 'colorListItemRectangles',
            scope: this
        });
    },

    colorListItemRectangles: function () {
        var me = this,
            chart = me.chart,
            list = me.list,
            colors = chart.getColors(),
            i = 0;

        Ext.Array.each(list.listItems, function (item) {
            item.element.down('.coloredRectangle').setStyle({
                backgroundColor: colors[i % colors.length]
            });

            i++;
        });
    }
});
