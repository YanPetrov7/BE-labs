<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Computer;

class HomeController extends Controller
{
  public function index()
  {
    $employees = Employee::orderBy('created_at', 'asc')->get();
    $computers = Computer::orderBy('created_at', 'asc')->get();

    return view('home', compact('employees', 'computers'));
  }
}
