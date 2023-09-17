<?php

    include("connect.php");
    include("signupanother.php");

    $first_name = "";
    $last_name = "";
    $email = "";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $signup = new Signup();
        $result = $signup->evaluate($_POST);

        if($result != ""){

            echo "<div style='text-align: center; font-size: 12px; color: white; background-color: grey;'>";
            echo "<br>The following errors occured:<br><br>";
            echo $result;
            echo "</div>";
        }
        
        // echo "<pre>";
        // print_r($_POST);
        // echo "</pre>";
    }
    
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assignment.css">
    <title>Sign Up</title>
    
</head>
<body>
    <div class="signup-box">
    <h1>Sign Up</h1>
        <form method="post" action="signup.php">
    <label class="names">
        <input value="<?php echo $first_name ?>" type="text" placeholder="First Name" name="first_name" required>&nbsp; &nbsp;
        <input value="<?php echo $last_name ?>" type="text" placeholder="Last Name" name="last_name" required>
    </label>
    <label>
        <input value="<?php echo $email ?>" type="email" placeholder="Email" name="email" required>
    </label>
    <label>
        <input type="password" placeholder="Password" name="psw1" required>
    </label>
    <label>
        <input type="password" placeholder="Confirm Password" name="psw2" required>
    </label>
    <label>
        <input type="checkbox" name="check">I accept the &nbsp;<a href="#">Terms of Use & Privacy Policy</a>
    </label>
    <button type="submit">Sign Up
    </button>
            </form>
      
    <p class="para">Already have an account?<span><a href="login.php">Login here</a><br><a href="Real_Landing_page.html">Home</a></span></p>
    <p>INOPP 2023 &copy; inopptogether.com</p>
        </div>
</body>
</html>