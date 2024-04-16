<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Computer;
use Carbon\Carbon;

class StatisticsController extends Controller
{
    public function index()
    {
        $totalRecordsEmployee = Employee::count();
        $totalRecordsComputer = Computer::count();

        $lastMonthRecordsEmployee = Employee::where('created_at', '>', Carbon::now()->subMonth())->count();
        $lastMonthRecordsComputer = Computer::where('created_at', '>', Carbon::now()->subMonth())->count();

        $lastRecordEmployee = Employee::latest()->first();

        $linkedRecordsEmployee = Employee::whereNotNull('computer_id')->get();

        return view('statistics.index', compact('totalRecordsEmployee', 'totalRecordsComputer', 'lastMonthRecordsEmployee', 'lastMonthRecordsComputer', 'lastRecordEmployee', 'linkedRecordsEmployee'));
    }
}
