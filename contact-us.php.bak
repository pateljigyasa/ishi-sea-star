<?php
 header("Access-Control-Allow-Origin: *");
$response = array();
$response["success"] = true;
$response["data"] = null;
$response["error"] = null;


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// define variables and set to empty values
$nameErr = $emailErr = $phoneErr  = "";
$name = $email = $phoneno = $company = $message = "";
$errors = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) { 
    $errors[] = array("field"=>"name", msg=>"Name is required");
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $errors[] = array("field"=>"name", msg=>"Only letters and white space allowed");
    }
  }

  if (empty($_POST["email"])) {
    $errors[] = array("field"=>"email", msg=>"Email is required");    
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = array("field"=>"email", msg=>"Invalid email format");        
    }
  }
  
  
  if (empty($_POST["phoneno"])) { 
    $errors[] = array("field"=>"phone", msg=>"Phone is required");        
  } else {
    $phone = $_POST["phoneno"]; 
  }
  
$company = $_POST["company"];
$msg = $_POST["message"];
  
$from = "awanish.tiwari@ishisystems.com";  
$to = array('pateljigyasa@gmail.com','awanish.tiwari@ishisystems.com','awanishkeshav@gmail.com');  
$successMsg = "Thanks a lot for contacting us. We shall get back to you shortly.";


$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=iso-8859-1";
$headers[] = "From: Awanish Tiwari <$from>"; 
$headers[] = "Reply-To: Recipient Name <$email>";
$headers[] = "Subject: $name has contacted us on Seastar Website";
$headers[] = "X-Mailer: PHP/".phpversion();
$subject = " $name has contacted us on Seastar Website";
$msg = "Name: $name <br> Email: $email <br> Phone: $phone <br> Company: $company <br> Message: $msg";
try{
	if(empty($errors)){
                mail(implode(',', $to), $subject, $msg, implode("\r\n", $headers));
		$response["data"] = $successMsg;	
	}
 	else{
        	$response["success"] = false;
        	$response["error"] = $errors;
 	}
}
catch(Exception $e){
	$response["success"] = false;
        $response["error"] = "We are experiencing some problems, please try later.";
}
}
else{
        $response["success"] = false;
	$response["error"] = "invalid method";
}

print json_encode($response);