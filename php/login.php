<?php
include "config.php";

  
	 extract($_POST);
	$sql = "SELECT * FROM user WHERE username='$userName' and password	='$userPassword'";  //$_POST[username']'
	 
	$rs = mysqli_query($conn, $sql) or die(mysqli_error($conn));
		if(mysqli_num_rows($rs) > 0){
 
				echo json_encode(mysqli_fetch_assoc($rs));
			 
			}
 
?>

