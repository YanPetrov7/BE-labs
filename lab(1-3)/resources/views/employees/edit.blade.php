<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Edit Employee</title>
    <link href="{{ asset('styles/create.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
    <h1>Edit Employee</h1>
    <form action="/employees/{{ $employee->id }}" method="POST">
        @csrf
        @method('PUT')

        <label for="last_name">Last Name:</label>
        <input type="text" name="last_name" id="last_name" value="{{ $employee->last_name }}" required><br>

        <label for="room_number">Room Number:</label>
        <input type="text" name="room_number" id="room_number" value="{{ $employee->room_number }}" required><br>

        <label for="department_name">Department Name:</label>
        <input type="text" name="department_name" id="department_name" value="{{ $employee->department_name }}" required><br>

        <label for="computer_id">Computer:</label>
        <select name="computer_id" id="computer_id">
            <option value="">No computer</option>
            @foreach($availableComputers as $computer)
            <option value="{{ $computer->id }}" {{ $employee->computer_id == $computer->id ? 'selected' : '' }}>
                {{ $computer->computer_model }} ({{ $computer->serial_number }})
            </option>
            @endforeach
        </select><br>

        <button type="submit">Update Employee</button>
    </form>
</body>

</html>