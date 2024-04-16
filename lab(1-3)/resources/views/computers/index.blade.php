<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
	<title>Computers</title>
</head>

<body>

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

	<h1>Computers</h1>
	<form action="/computers/delete" method="POST">
		@csrf
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>Computer Model</th>
					<th>Serial Number</th>
					<th>Brand</th>
					<th>Created At</th>
					<th>Updated At</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				@foreach($computers as $computer)
				<tr>
					<td>{{ $computer->id }}</td>
					<td>{{ $computer->computer_model }}</td>
					<td>{{ $computer->serial_number }}</td>
					<td>{{ $computer->brand }}</td>
					<td>{{ $computer->created_at }}</td>
					<td>{{ $computer->updated_at }}</td>
					<td><input type="checkbox" name="ids[]" value="{{ $computer->id }}"></td>
				</tr>
				@endforeach
			</tbody>
		</table>
		<button type="submit">Delete</button>
	</form>
</body>

</html>