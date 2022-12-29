<?php
$name = $_POST['name'];
$email = $_POST['email'];

	$message = '<html><body>';
	$message .= '<table rules="all" cellpadding="10px" border="0px">';
	$message .= "<tr><td style='background-color: #EEEEEE;'><strong>Name:</strong> </td><td style='background-color: #EEEEEE;'>" . strip_tags($_POST['name']) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
	$message .= "</table>";
	$curText = htmlentities($_POST['message']);
	if (($curText) != '') {
	    $message .= "<br><br><em>" . $curText . "</em><br><br><br>";
	}
	$message .= "<a href='mailto:$email?Subject=clasycow.github.io.com Website Visitor Inquiry' target='_top'>Reply</a> directly to this email to contact the inquiring party.";
	$message .= "</body></html>";




	//  MAKE SURE THE "FROM" EMAIL ADDRESS DOESN'T HAVE ANY NASTY STUFF IN IT

	$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i";
    if (preg_match($pattern, trim(strip_tags($_POST['email'])))) {
        $cleanedFrom = trim(strip_tags($_POST['email']));
    } else {
        return "The email address you entered was invalid. Please try again!";
    }




    //   CHANGE THE BELOW VARIABLES TO YOUR NEEDS

	$to = 'clasycow@outlook.com';

	$subject = 'clasycow.github.io Website Visitor Inquiry';

	$headers = "From: " . $cleanedFrom . "\r\n";
	$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if (mail($to, $subject, $message, $headers)) {
      echo '
<HTML>
<HEAD>
<META HTTP-EQUIV="Refresh"
      CONTENT="5; URL=https://clasycow.github.io">
</HEAD>
<BODY LINK=BLUE ALINK=BLUE VLINK=BLUE>
<BR><BR>
<FONT FACE="Verdana" size="2">

<CENTER>Your message has been sent <strong>SUCCESSFULLY</strong>, we will get back to you soon!</CENTER><BR>
<CENTER><IMG SRC="images/wait.gif"></CENTER><BR>
<CENTER><sub>If you are not redirected within 5 seconds, click <a href="http://clasycow.github.io">here</a>.</sub></CENTER>
</FONT>
</BODY>
</HTML>
	  ';
    } else {
      echo '
<HTML>
<HEAD>
<META HTTP-EQUIV="Refresh"
      CONTENT="15; URL=http://clasycow.github.io">
</HEAD>
<BODY LINK=BLUE ALINK=BLUE VLINK=BLUE>
<BR><BR>
<FONT FACE="Verdana" size="2">

<CENTER>Our apologies, there was an <strong>ERROR</strong> with your message.  Please check your submission to ensure you have entered a method we can contact you back at.</CENTER><BR>
<CENTER><IMG SRC="images/wait.gif"></CENTER><BR>
<CENTER><sub>If you are not redirected within 15 seconds, click <a href="http://clasycow.github.io">here</a>.</sub></CENTER>
</FONT>
</BODY>
	  ';
    }

    // DON'T BOTHER CONTINUING TO THE HTML...
    die();
?>
