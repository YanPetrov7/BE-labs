<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
	<title>Employees</title>
</head>

<body>

	<h1>Employees</h1>

	@if(session('error'))
	<div class="message error">
		{{ session('error') }}
	</div>
	@endif

	@if(session('success'))
	<div class="message success">
		{{ session('success') }}
	</div>
	@endif

	<form action="/employees/delete" method="POST">
		@csrf
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>Last Name</th>
					<th>Room Number</th>
					<th>Department Name</th>
					<th>Computer ID</th>
					<th>Created At</th>
					<th>Updated At</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				@foreach($employees as $employee)
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
					<td><input type="checkbox" name="ids[]" value="{{ $employee->id }}"></td>
				</tr>
				@endforeach
			</tbody>
		</table>
		<button type="submit">Delete</button>
	</form>
</body>

</html>