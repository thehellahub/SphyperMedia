<?php

//import.php

if(!empty($_FILES['csv_file']['name']))
{
 $file_data = fopen($_FILES['csv_file']['tmp_name'], 'r');
 fgetcsv($file_data);
 while($row = fgetcsv($file_data))
 {
  $data[] = array(
   'track_title'  => $row[0],
   'track_length'  => $row[1],
   'artist'  => $row[2],
   'album'  => $row[3],
   'genre'  => $row[4]
  );
 }
 echo json_encode($data);
}

?>