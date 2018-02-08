<?php

require 'twig.php';

$params = array(
	'title' => 'Coapeñitos-ubicaci\'on',
	'keywords' => 'Taco Coapeñitos Cancun, Los mejores tacos de Cancun, Tacos Cancun, Taco Cancun, Donde comer tacos en cancun, tacos al pastor cancun, tacos baratos, tacos saludables, tacos vegetarianos.'
);
##Hola subisssss
$template = $twig->load('main.twig');
echo $template->render($params);
?>