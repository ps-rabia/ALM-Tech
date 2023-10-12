<?php

$errors = [];
$data = [];

if (empty($_POST['f_name'])) {
    $errors['name'] = 'First Name is required.';
}

if (empty($_POST['l_name'])) {
    $errors['name'] = 'Last Name is required.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}



if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    try {
        //code...
        if(isset($_POST['submit'])){
            $to = "info@theworkingtown.com"; // this is your Email address
            $from = $_POST['email']; // this is the sender's Email address
            $first_name = $_POST['f_name'];
            $last_name = $_POST['l_name'];
            $help = $_POST['help'];
            $subject = "TWT Contact Us Form";
            $message = <<<END
            Contact Form Submission on TWT.
            
            First Name: $first_name
            
            Last Name: $last_name

            Email: $from

            Message: $help
            END;
            
            $headers = "From:" . $from;
            mail($to,$subject,$message,$headers);
            // You can also use header('Location: thank_you.php'); to redirect to another page.
            $data['success'] = true;
            $data['message'] = 'Success! Contact form submitted.';
            }
    } catch (\Throwable $th) {
        $data['success'] = false;
        $errors['message'] = 'There was an error on the server.';
    }
}

echo json_encode($data);

?>