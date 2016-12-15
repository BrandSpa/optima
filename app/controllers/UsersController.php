<?php

class UsersController extends BaseController{

	public function getLogin()
	{
		return View::make('users.login');
	}

	public function postLogin()
	{
		$credentials = ['email' => Input::get('email'), 'password' => Input::get('password')];
		if (Auth::Attempt($credentials)) {
			return Redirect::to('/');
		}

		return Redirect::to('/login');
	}

	public function logout()
	{
		if (Auth::check())
		{
    	Auth::logout();
    	return Redirect::to('/login');
		}
	}

}