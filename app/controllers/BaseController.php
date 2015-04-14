<?php

class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

	public function store() 
	{	
		$data = Input::all();

		$validator = Validator::make($data, $this->entity->rules);

		if ($validator->passes()) {
			$model = $this->entity->create($data);
			return Response::json($model, 201);
		}
		
		return Response::json($validator->errors()->all(), 400);
	}

	public function update($id)
	{
		$data = Input::all();

		$validator = Validator::make($data, $this->entity->rules);

		if ($validator->passes()) {
			$model = $this->entity->find($id);
			$model->update($data);
			return Response::json($model, 200);
		}
		
		return Response::json($validator->errors()->all(), 400);
	}

}