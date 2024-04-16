<!DOCTYPE html>
<html>

<head>
  <title>Search</title>
  <link href="{{ asset('styles/home.css') }}" type="text/css" rel="stylesheet">
</head>

<body>
  <h1>Enter search query</h1>
  <form action="/search" method="POST">
    @csrf
    <input type="text" name="query" placeholder="Search...">
    <input type="date" name="start_date" placeholder="Start Date">
    <input type="date" name="end_date" placeholder="End Date">
    <button type="submit">Search</button>
  </form>
</body>

</html>