<?php
	if(isset($_POST["name"])) {
		$name = $_POST["name"];
		$message = $_POST["message"];
		file_put_contents("messages.txt", file_get_contents("messages.txt")."\n$name;$message");
		
	}
	elseif(isset($_POST["update"])) {
		$string = file_get_contents("messages.txt");
		$array = explode("\n", $string);
		$result = array();
		for ($i = 0; $i < count($array); $i++) {
			$temp = explode(";", $array[$i]);
			$result[$i]["name"] = $temp[0];
			$result[$i]["message"] = $temp[1];
		}
		echo json_encode($result);
	}
?>
