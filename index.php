<?php

require 'twig.php';
require 'array-ingles.php';

$params = array(
	'title' => 'Coapeñitos',
	'keywords' => 'Taco Coapeñitos Cancun, Los mejores tacos de Cancun, Tacos Cancun, Taco Cancun, Donde comer tacos en cancun, tacos al pastor cancun, tacos baratos, tacos saludables, tacos vegetarianos.',
	'service'=>$services,
	'op'=>$op,
	'inf'=>$information,
	'contact'=>$contact
);
##Hola subisssss
$template = $twig->load('main.twig');
echo $template->render($params);
?>