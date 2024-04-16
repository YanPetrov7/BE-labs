<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Computer</title>
    <link href="{{ asset('styles/create.css') }}" type="text/css" rel="stylesheet">
</head>
<body>
    <h1>Edit Computer</h1>
    <form action="/computers/{{ $computer->id }}" method="POST">
        @csrf
        @method('PUT')

        <label for="computer_model">Computer model:</label>
        <input type="text" name="computer_model" id="computer_model" value="{{ $computer->computer_model }}" required><br>

        <label for="serial_number">Serial number:</label>
        <input type="text" name="serial_number" id="serial_number" value="{{ $computer->serial_number }}" required><br>

        <label for="brand">Brand:</label>
        <input type="text" name="brand" id="brand" value="{{ $computer->brand }}" required><br>

        <button type="submit">Update Computer</button>
    </form>
</body>
</html>