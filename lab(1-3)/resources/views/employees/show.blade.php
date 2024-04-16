<!DOCTYPE html>
<html>

<head>
	<title>Employee Details</title>
	<link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
	<h1>Employee Details</h1>
	<table>
		<tr>
			<th>id</th>
			<th>Last Name</th>
			<th>Room Number</th>
			<th>Department Name</th>
			<th>Computer ID</th>
			<th>Created At</th>
			<th>Updated At</th>
		</tr>
		<tr>
			<td>{{ $employee->id }}</td>
			<td>{{ $employee->last_name }}</td>
			<td>{{ $employee->room_number }}</td>
			<td>{{ $employee->department_name }}</td>
			<td>
				@if ($employee->computer_id)
				<a href="/computers/{{ $employee->computer_id }}">{{ $employee->computer_id }}</a>
				@else
				<a href="/computers/0">-</a>
				@endif
			</td>
			<td>{{ $employee->created_at }}</td>
			<td>{{ $employee->updated_at }}</td>
		</tr>
	</table>
</body>

</html>