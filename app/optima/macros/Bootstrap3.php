<?php namespace Optima\Macros;

use Form;
use HTML;


HTML::macro('modal', function($id, $title)
{
	return '<div class="modal fade" id="'.$id.'">
	<div class="modal-dialog">
	<div class="modal-content">
	<div class="modal-body">
	</div>
	</div>
	</div>
	</div>';
});

HTML::macro('navlink', function($page, $url, $text)
{
	if ($page == $url) {
		return '<li class="active"><a href="'.$url.'">'.$text.'</a></li>';
	} else {
		return '<li><a href="'.$url.'">'.$text.'</a></li>';
	}
	
});