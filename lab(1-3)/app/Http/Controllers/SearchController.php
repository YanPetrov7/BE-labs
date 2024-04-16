<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
  public function showForm()
  {
    return view('search.form');
  }

  public function index(Request $request)
  {
    $searchTerm = strtolower($request->input('query', ''));
    $startDate = $request->input('start_date');
    $endDate = $request->input('end_date');

    $employees = DB::table('employees')
      ->leftJoin('computers', 'employees.computer_id', '=', 'computers.id')
      ->select(
        'employees.id',
        'employees.last_name',
        'employees.room_number',
        'employees.department_name',
        'employees.computer_id',
        'computers.computer_model',
        'computers.serial_number',
        'computers.brand',
        'employees.created_at',
        'employees.updated_at'
      )
      ->when($searchTerm, function ($query) use ($searchTerm) {
        $likeSearchTerm = "%{$searchTerm}%";
        return $query->where(function ($query) use ($likeSearchTerm) {
          $query->whereRaw('LOWER(employees.last_name) LIKE ?', [$likeSearchTerm])
            ->orWhereRaw('LOWER(employees.room_number) LIKE ?', [$likeSearchTerm])
            ->orWhereRaw('LOWER(employees.department_name) LIKE ?', [$likeSearchTerm])
            ->orWhereRaw('LOWER(computers.computer_model) LIKE ?', [$likeSearchTerm])
            ->orWhereRaw('LOWER(computers.serial_number) LIKE ?', [$likeSearchTerm])
            ->orWhereRaw('LOWER(computers.brand) LIKE ?', [$likeSearchTerm]);
        });
      })
      ->when($startDate, function ($query) use ($startDate) {
        return $query->where('employees.created_at', '>=', $startDate);
      })
      ->when($endDate, function ($query) use ($endDate) {
        return $query->where('employees.created_at', '<=', $endDate);
      })
      ->orderBy('employees.created_at', 'desc')
      ->get();

    return view('search.index', compact('employees'));
  }
}
