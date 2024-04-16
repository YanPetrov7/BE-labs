<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
	<title>Statistics</title>
</head>

<body>
	<h1>Statistics</h1>
	<table>
		<tr>
			<th>Category</th>
			<th>Value</th>
		</tr>
		<tr>
			<td>All records in the employees table</td>
			<td>{{ $totalRecordsEmployee }}</td>
		</tr>
		<tr>
			<td>All records in the computers table</td>
			<td>{{ $totalRecordsComputer }}</td>
		</tr>
		<tr>
			<td>Records for the last month in the employees table</td>
			<td>{{ $lastMonthRecordsEmployee }}</td>
		</tr>
		<tr>
			<td>Records for the last month in the computers table</td>
			<td>{{ $lastMonthRecordsComputer }}</td>
		</tr>
		<tr>
			<td>Last record in the employees table</td>
			<td><a href="/employees/{{ $lastRecordEmployee->id }}">{{ $lastRecordEmployee->id }}</a></td>
		</tr>
		<tr>
			<td>Employees that have computers</td>
			<td>
				@foreach ($linkedRecordsEmployee as $record)
				<span><a href="/employees/{{ $record->id }}">{{ $record->id }}</a></span>
				@endforeach
			</td>
		</tr>
	</table>
</body>

</html>