<?php

$name = $_POST['name'];
$contact = $_POST['contact'];
$email = $_POST['message'];

$arr = array(
  'Имя: ' => $name,
  'Контакт: ' => $contact,
  'Сообщение: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$token = "6919275116:AAGXuMO9DSm17HKXOXrhmThqhRhdLKcO-iI";
$chat_id = "-4025228245";

$debug_to_console("Test");

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Good!";
} else {
  echo "Error";
}