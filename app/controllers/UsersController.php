<?php
use Tymon\JWTAuth\Exceptions\JWTException;

class UsersController extends BaseController{

	public function login() {
		$credentials = Input::only('email', 'password');

        try {	
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return Response::json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return Response::json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return Response::json(compact('token'));
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