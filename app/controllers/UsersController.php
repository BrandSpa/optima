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

	public function getLogin()
	{
		return View::make('users.login');
	}

	public function getCreate()
	{
		return View::make('users.create');
	}

	public function postCreate(){
		$validation=Validator::make(Input::all(),
        array(
			'email'=>'required|max:255|unique:users,email',
			'name' => 'required',
			'lastname' => 'required',
			'password'=>'required',
		));
		if($validation->fails())
		return Redirect::route('create')->withInput()->withErrors($validation->messages());
		else
		{
			$user=new User();
			$user->email=Input::get('email');
			$user->name=Input::get('name');
			$user->lastname=Input::get('lastname');
			$user->password=Hash::make(Input::get('password'));
			$user->save();
			return Redirect::route('');
		}
		return View::make('create');
	}

	public function postLogin()
	{
		$credentials = ['email' => Input::get('email'), 'password' => Input::get('password')];
		if (Auth::Attempt($credentials)) {
			return Redirect::to('/');
			return Response::json('ok');
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