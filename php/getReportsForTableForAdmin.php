<?php
include "config.php";

extract($_POST);
// Perform a query

$sql = "SELECT *  ,rep.id as repID, u.id as userID ,
rep.type as repType,

(select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1) as repCurrentStatus,

(select img.name from reportimage as img where img.reportId=rep.id LIMIT   1) as imgPath

FROM `report` as rep  
left join user as u
on rep.userId=u.id  
where   (select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1)!='approved' 
and (select status.repStatusType from `repstatus` as status WHERE status.repStatusFKreports=rep.id  Order BY status.repStatusDateCreated  DESC limit 1)!='unapproved'  ";
 
 
$result = mysqli_query($conn, $sql);

$record = array();
// Fetch data

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {


 
// Create an associative array with both binary image data and other data
$record[] = array(
	'repID' => $row['repID'],
    'repTitle' => $row['title'],
	'repDateSubmit' => $row['date'],
	'repType' => $row['repType'],
	//'repTypeSpecification' => $row['repTypeSpecification'],
		'repLocationDetail' => $row['address'],
	  

	'repLocationY' => $row['latitude'],
	'repLocationX' => $row['longitude'],

	'repDatePeriodBegin' => $row['date'],
	'repContent' => $row['descr'],
	'repNormalUser' => $row['userId'],
 
	'repDept' => $row['dept'],
	
	'repCurrentStatus'=> $row['repCurrentStatus'],
	

	'userID' => $row['id'],
	'userName' => $row['username'],
	'userDept' => $row['type'],
	'userPassword' => $row['password'], 

    'imgPath' =>$row['imgPath']);
 }
			echo  json_encode($record);
} else {
    echo "No results found.";
}

// Close connection
mysqli_close($conn);


?>