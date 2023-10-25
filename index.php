<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$errors = [];
$errorMessage = '';
$successMessage = '';
$siteKey = '6Lf8ZsEoAAAAAJodvovAjcKj_eo30UV2CyXl70mj'; // reCAPTCHA site key
$secret = '6Lf8ZsEoAAAAANY0O4x-wkACCJF3ERo3CV2sSpRt'; // reCAPTCHA secret key

if ($_SERVER['REQUEST_METHOD'] === 'POST') {...}

4 usages
function sanitizeInput ($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, flags:ENT_QUOTES, encoding: 'UTF_8');
    return $input;
}

$errors = [];
$errorMessage = '';

$secret = '6Lf8ZsEoAAAAANY0O4x-wkACCJF3ERo3CV2sSpRt';

// This is server side validation for data validation and verification constructs//
<?php

$errors = [];

if (!empty($_POST)) {
   $firstName = $_POST['firstName'];
   $lastName = $_POST['lastName'];
   $gender = $_POST['gender'];
   $address = $_POST['address'];
   $neighborhood = $_POST['neighborhood'];
   $email = $_POST['email'];
   $newsletter = $_POST['newsletter'];
   $comments = $_POST['comments'];
   
   if (empty($firstName)) {
    $errors[] = 'First Name is empty';
    }
    if (empty($lastName)) {
    $errors[] = 'Last Name is empty';
    }
    if (empty($gender)) {
        $errors[] = 'Gender is empty';
    }
    if (empty($address)) {
        $errors[] = 'Address is empty';
    }
    if (empty($neighborhood)) {
        $errors[] = 'Neighborhood is empty';
    }
    if (empty($email)) {
       $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

    if (empty($newsletter)) {
        $errors[] = 'Newsletter is empty';
    }

    if (empty($comments)) {
       $errors[] = 'Comments is empty';
   }
}

    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }


// This is PHP to send a email from the contact form //

// Remember you have to ADD this to the beginning of the html page, right after a <body> tag and follow it with a <html> tag and another <body> tag, then enter the <form  method="post" id="contact-form">
// Then enter:
//   <h2>Contact us</h2> followed by: <?php echo((!empty($errorMessage)) ? $errorMessage : '')
// to the beginning of the html contact form!! //

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $firstName = $_POST['firstName'];
   $lastName = $_POST['lastName'];
   $gender = $_POST['gender'];
   $address = $_POST['address'];
   $neighborhood = $_POST['neighborhood'];
   $email = $_POST['email'];
   $newsletter = $_POST['newsletter'];
   $comments = $_POST['comments'];
   
   if (empty($name)) {
       $errors[] = 'Name is empty';
   }
   if (empty($firstName)) {
    $errors[] = 'First Name is empty';
    }
    if (empty($lastName)) {
    $errors[] = 'Last Name is empty';
    }
    if (empty($gender)) {
        $errors[] = 'Gender is empty';
    }
    if (empty($address)) {
        $errors[] = 'Address is empty';
    }
    if (empty($neighborhood)) {
        $errors[] = 'Neighborhood is empty';
    }
    if (empty($email)) {
       $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

    if (empty($newsletter)) {
        $errors[] = 'Newsletter is empty';
    }

    if (empty($comments)) {
       $errors[] = 'Comments is empty';
   }
}
    if (empty($errors)) {
        $toEmail = 'Pavellc@gmail.com';
        $emailSubject = 'New email from your contact form';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
        $bodyParagraphs = ["First Name: {$firstName}", "Last Name: {$lastName}","gender: {$gender}","Address: {$address}","Neighborhood: {$neighborhood}","Email: {$email}", "Newsletter: {$newsletter}","Comments:", $comments];
        $body = join(PHP_EOL, $bodyParagraphs);

    if (mail($toEmail, $emailSubject, $body, $headers)) {

        header('Location: thank-you.html');
    } else {
        $errorMessage = 'Oops, something went wrong. Please try again later';
    }

    } else {

        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }


// This is to format the contact form to include reCAPTCHA on the contact form //  

    $errors = [];
    $errorMessage = '';

    $secret = '6Lf8ZsEoAAAAANY0O4x-wkACCJF3ERo3CV2sSpRt';

    if (!empty($_POST)) {
       $firstName = $_POST['firstName'];
       $lastName = $_POST['lastName'];
       $gender = $_POST['gender'];
       $address = $_POST['address'];
       $neighborhood = $_POST['neighborhood'];
       $email = $_POST['email'];
       $newsletter = $_POST['newsletter'];
       $comments = $_POST['comments'];
       $recaptchaResponse = $_POST['g-recaptcha-response'];
    
       $recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$recaptchaResponse}";
       $verify = json_decode(file_get_contents($recaptchaUrl));
    
       if (!$verify->success) {
            $errors[] = 'Recaptcha failed';
       }
    
       if (empty($firstName)) {
            $errors[] = 'First Name is empty';
        }
        if (empty($lastName)) {
            $errors[] = 'Last Name is empty';
        }
        if (empty($gender)) {
            $errors[] = 'Gender is empty';
        }
        if (empty($address)) {
            $errors[] = 'Address is empty';
        }
        if (empty($neighborhood)) {
            $errors[] = 'Neighborhood is empty';
        }
        if (empty($email)) {
           $errors[] = 'Email is empty';
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
           $errors[] = 'Email is invalid';
       }
    
        if (empty($newsletter)) {
            $errors[] = 'Newsletter is empty';
        }
    
        if (empty($comments)) {
           $errors[] = 'Comments is empty';
       }
    }
    
        if (!empty($errors)) {
            $allErrors = join('<br/>', $errors);
            $errorMessage = "<p style='color: red;'>{$allErrors}";
    
        } else {
            $toEmail = 'Pavellc@gmail.com';
            $emailSubject = 'New email from your contact form';
            $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
            $bodyParagraphs = ["First Name: {$firstName}", "Last Name: {$lastName}","gender: {$gender}","Address: {$address}","Neighborhood: {$neighborhood}","Email: {$email}", "Newsletter: {$newsletter}","Comments:", $comments];
            $body = join(PHP_EOL, $bodyParagraphs);
    
        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: thank-you.html');
        } else {
            $errorMessage = "<p style='color: red;'>Oops, something went wrong. Please try again later</p>";
        }
    }

