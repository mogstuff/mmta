/**
 * Info View
 * 
 */
Ext.define("mmta.view.Info", {
    extend: "Ext.Container",
    requires: ["Ext.Container"],
    alias: "widget.info",
    xtype: 'info',
    requires: [ 'Ext.TitleBar'],
    
     config:{
		styleHtmlContent: true,
                scrollable: true,
   		
            
             
          items: [
								 {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'MMTA (Morecambe Muay Thai Assocation) Info'
                },
								
{
xtype: 'panel',


html: ["<h2>Contact Info</h2>",
"<h3>Full Name: Mark Morgan</h3>",
"<h3>Email: markmorgan.mcp@gmail.com</h3>",
"<h2>About this app</h2>",
"<p>The app makes REST GET Calls to the following API's:</p>",
"<ul>",
"<li>Google Calendar - see Class Times View</li>",
"<li>Youtube Data API - Videos, Video, Bar Chart and Pie Chart</li>",
"</ul>",
"<p>The MAP View uses Google Maps JavaScript API</p>",
"<p>The app is built using the MVC pattern and calls to both APIs are made via Ajax Proxy calls in the stores. ",
"These reference php",
"scripts which use the php function file_get_contents in order to workaround the Same Origin Policy.</p>",
"<p>The Calendar Viewv grabs upcoming class times from a public calendar which ",
" can be found ",
"<a href=\"https://www.google.com/calendar/embed?src=s85r477unba7a9sk8vnolgpvg8%40group.calendar.google.com&ctz=Europe/London\" target='_blank'>here</a></p>",
"<p>The Videos list, Bar Chart and Pie Chart Views grap data via the Youtube Data API V2 (I used V2 because you cannot get statistics within a list of videos with V3)</p>",
"<p>You can find the MMTA Youtube Channel <a href=\"https://www.youtube.com/user/MMTAmuaythai\" target='_blank'>here</a>.  I have used the JavaScript Maps API from Google to show the location of classes on the Map View.</p>",
"<p>It could be argued that this app meets both sets of requirements for the final project, in that it is a mashup of data from two APIs, Google Calendar and Youtube Data, and visualizes dynamic data, Pie Chart and Bar Chart Views. </p>"
								
].join("")
								},
								
							]
    },
    
    
    
    initialize: function () {

        this.callParent(arguments);

    }
});

