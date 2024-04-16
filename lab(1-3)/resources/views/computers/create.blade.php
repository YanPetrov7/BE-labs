<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Create computer</title>
	<link href="{{ asset('styles/create.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
	<h1>Create computer</h1>
	<form action="/computers" method="POST">
		@csrf
		<label for="computer_model">Computer model:</label>
		<input type="text" name="computer_model" id="computer_model" required><br>

		<label for="serial_number">Serial number:</label>
		<input type="text" name="serial_number" id="serial_number" required><br>

		<label for="brand">Brand:</label>
		<input type="text" name="brand" id="brand" required><br>

		<button type="submit">Create computer</button>
	</form>
</body>

</html>