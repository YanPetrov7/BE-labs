<!DOCTYPE html>
<html>

<head>
  <title>Search results</title>
  <link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
  <h1>Search Results</h1>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Last Name</th>
      <th>Room Number</th>
      <th>Department Name</th>
      <th>Computer ID</th>
      <th>Computer Model</th>
      <th>Serial Number</th>
      <th>Brand</th>
      <th>Created At</th>
      <th>Updated At</th>
    </tr>
    @foreach($employees as $employee)
    <tr>
      <td>{{ $employee->id }}</td>
      <td>{{ $employee->last_name }}</td>
      <td>{{ $employee->room_number }}</td>
      <td>{{ $employee->department_name }}</td>
      <td>{{ $employee->computer_id }}</td>
      <td>{{ $employee->computer_model }}</td>
      <td>{{ $employee->serial_number }}</td>
      <td>{{ $employee->brand }}</td>
      <td>{{ $employee->created_at }}</td>
      <td>{{ $employee->updated_at }}</td>
    </tr>
    @endforeach
  </table>

  <a href="javascript:history.back()">Return to search input</a>
</body>

</html>