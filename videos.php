<?php
$result = file_get_contents('http://gdata.youtube.com/feeds/api/videos?q=morecambe_muay_thai&max-results=5&v=2&alt=jsonc&orderby=viewCount');
$result2 = str_replace('\/','//',$result);
// youtube V3 Call : // https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=morecambe_muay_thai&key=AIzaSyCMfgPMsMiqj26svQKFriQDlY3RCODCti4
// DOES NOT INCLUDE STATISTICS - See : https://developers.google.com/youtube/v3/getting-started

// https://www.googleapis.com/youtube/v3/videos?id=1Dgb5YDzIXU&key=AIzaSyCMfgPMsMiqj26svQKFriQDlY3RCODCti4&part=snippet,statistics

// this includes the stats:
// https://www.googleapis.com/youtube/v3/videos?id=1Dgb5YDzIXU&key=AIzaSyCMfgPMsMiqj26svQKFriQDlY3RCODCti4&part=snippet,statistics

// just the statistics bit:
//https://www.googleapis.com/youtube/v3/videos?id=1Dgb5YDzIXU&key=AIzaSyCMfgPMsMiqj26svQKFriQDlY3RCODCti4&part=statistics

$obj = json_decode($result2);
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
$items = $obj->data->items;
//echo json_encode($items);

class Video
{
	public function __construct($id, $title, $thumbnail, $href, $viewCount)
	{
		$this->id = $id;
		$this->title = $title;
		$this->thumbnail = $thumbnail;
		$this->href = $href;
		$this->viewCount = $viewCount;
	}
	
}

$data = array();

foreach($items as $item)
{
	$video = new Video($item->id, $item->title, $item->thumbnail->sqDefault, $item->player->mobile,$item->viewCount);
	$data[] = $video;
}

echo json_encode($data);
?>
