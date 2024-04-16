<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Create employee</title>
	<link href="{{ asset('styles/create.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
	<h1>Create employee</h1>
	<form action="/employees" method="POST">
		@csrf
		<label for="last_name">Last Name:</label>
		<input type="text" name="last_name" id="last_name" required><br>

		<label for="room_number">Room Number:</label>
		<input type="text" name="room_number" id="room_number" required><br>

		<label for="department_name">Department Name:</label>
		<input type="text" name="department_name" id="department_name" required><br>

		<label for="computer_id">Computer:</label>
		<select name="computer_id" id="computer_id">
			<option value="">No computer</option>
			@foreach ($availableComputers as $computer)
			<option value="{{ $computer->id }}">{{ $computer->computer_model }}</option>
			@endforeach
		</select><br>

		<button type="submit">Create Employee</button>
	</form>
</body>

</html>