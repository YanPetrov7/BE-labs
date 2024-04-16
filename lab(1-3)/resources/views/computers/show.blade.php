<!DOCTYPE html>
<html>

<head>
	<title>Computer Details</title>
	<link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
	<h1>Computer Details</h1>
	<table>
		<tr>
			<th>id</th>
			<th>Computer Model</th>
			<th>Serial Number</th>
			<th>Brand</th>
			<th>Created At</th>
			<th>Updated At</th>
		</tr>
		<tr>
			<td>{{ $computer->id }}</td>
			<td>{{ $computer->computer_model }}</td>
			<td>{{ $computer->serial_number }}</td>
			<td>{{ $computer->brand }}</td>
			<td>{{ $computer->created_at }}</td>
			<td>{{ $computer->updated_at }}</td>
		</tr>
	</table>
</body>

</html>