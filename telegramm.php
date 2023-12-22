<?php

$name = $_POST['name'];
$phone = $_POST['contact'];
$email = $_POST['message'];
$token = "6708606839:AAFPUf0zjK31txAcZ_-GYHEt67L_Vng6sWQ";
$chat_id = "-4003897361";
$arr = array(
  'Имя: ' => $name,
  'Контакт: ' => $phone,
  'Сообщение: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: success.html');
  echo("все получилось!");
} else {
  echo "Error";
}

?>