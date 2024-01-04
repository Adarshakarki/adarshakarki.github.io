<?php
$servername = "sql213.infinityfree.com";
$username = "if0_35636795";
$password = "AAPxK5bKHdJ36k";
$dbname = "if0_35636795_Passmanager";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $password = $_POST['password'];

        if (!$email) {
            echo '<script>alert("Invalid email format. Please enter a valid email address.");</script>';
            exit(); // Terminate the script
        } else {
            $action = $_POST['action'];
            $checkEmailQuery = "SELECT * FROM users WHERE email = ?";
            $stmt = $conn->prepare($checkEmailQuery);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $checkResult = $stmt->get_result();

            if ($checkResult->num_rows > 0 && $action === 'login') {
                $user = $checkResult->fetch_assoc();
                $hashedPassword = $user['password'];

                if (password_verify($password, $hashedPassword)) {
                    echo '<script>alert("Login successful!");</script>';
                    exit(); // Terminate the script
                    // You can add additional logic here if needed
                } else {
                    echo '<script>alert("Incorrect password. Please try again.");</script>';
                    exit(); // Terminate the script
                }
            } elseif ($checkResult->num_rows === 0 && $action === 'signup') {
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                $insertUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";
                $stmt = $conn->prepare($insertUserQuery);
                $stmt->bind_param("ss", $email, $hashedPassword);

                if ($stmt->execute()) {
                    echo '<script>alert("Account created successfully!");</script>';
                    exit(); // Terminate the script
                    // You can add additional logic here if needed
                } else {
                    echo '<script>alert("Error creating account. Please try again later.");</script>';
                    exit(); // Terminate the script
                }
            } else {
                echo '<script>alert("Invalid action.");</script>';
                exit(); // Terminate the script
            }
        }
    }
}
?>
