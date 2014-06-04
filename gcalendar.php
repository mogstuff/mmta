<?php
$current_time = urlEncode(subStr(date("c"), 0, 19)."Z"); 
$url = 'https://www.googleapis.com/calendar/v3/calendars/s85r477unba7a9sk8vnolgpvg8@group.calendar.google.com/events?singleEvents=true&timeMin=' . $current_time . '&maxResults=5&sortorder=descending&fields=items(end,start,status,summary,location)&key={api key here};
$result = file_get_contents($url);
$obj = json_decode($result);
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
date_default_timezone_set('Europe/London');

class ClassTime
{
	public function __construct($end,$start,$status,$summary,$location)
	{
		$this->start = strtotime($start);
		$this->start = $fixed = date('l, F jS Y \a\t g:ia', $this->start); 
		$this->end =  strtotime($end);
		$this->end = $fixed = date('l, F jS Y \a\t g:ia', $this->end); 
		$this->status = $status;
		$this->summary = $summary;
		$this->location = $location;
	}	
}

$data = array();

foreach($obj->items as $item)
{
	$classtime = new ClassTime($item->end->dateTime, $item->start->dateTime, $item->status,$item->summary, $item->location);
	$data[] = $classtime;
}

echo json_encode($data, JSON_PRETTY_PRINT);

?>

