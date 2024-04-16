<!DOCTYPE html>
<html>

<head>
  <title>Employees and Computers</title>
  <link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
</head>

<body>

  <h1>Employees</h1>
  <table border="1">
    <tr>
      <th>id</th>
      <th>Last Name</th>
      <th>Room Number</th>
      <th>Department Name</th>
      <th>Computer ID</th>
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
      <td>{{ $employee->created_at }}</td>
      <td>{{ $employee->updated_at }}</td>
    </tr>
    @endforeach
  </table>

  <h1>Computers</h1>
  <table border="1">
    <tr>
      <th>id</th>
      <th>Computer Model</th>
      <th>Serial Number</th>
      <th>Brand</th>
      <th>Created At</th>
      <th>Updated At</th>
    </tr>
    @foreach($computers as $computer)
    <tr>
      <td>{{ $computer->id }}</td>
      <td>{{ $computer->computer_model }}</td>
      <td>{{ $computer->serial_number }}</td>
      <td>{{ $computer->brand }}</td>
      <td>{{ $computer->created_at }}</td>
      <td>{{ $computer->updated_at }}</td>
    </tr>
    @endforeach
  </table>

</body>

</html>