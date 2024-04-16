<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Computer;

class EmployeeController extends Controller
{
    public function show($id)
    {
        $employee = Employee::find($id);

        if (!$employee) {
            return view('employees.empty_employee_table');
        }

        return view('employees.show', compact('employee'));
    }

    public function index()
    {
        $employees = Employee::all();
        return view('employees.index', compact('employees'));
    }

    public function showCreateForm()
    {
        $availableComputers = Computer::leftJoin('employees', 'computers.id', '=', 'employees.computer_id')
            ->whereNull('employees.computer_id')
            ->select('computers.*')
            ->get();

        return view('employees.create', compact('availableComputers'));
    }

    public function create(Request $request)
    {
        $employee = new Employee();
        $employee->last_name = $request->input('last_name');
        $employee->room_number = $request->input('room_number');
        $employee->department_name = $request->input('department_name');
        $employee->computer_id = $request->input('computer_id');
        $employee->save();

        return redirect('/employees')->with('success', 'Employee created successfully.');
    }

    public function showEditForm($id)
    {
        $employee = Employee::findOrFail($id);
        $availableComputers = Computer::leftJoin('employees', 'computers.id', '=', 'employees.computer_id')
            ->whereNull('employees.computer_id')
            ->orWhere('employees.id', '=', $id)
            ->select('computers.*')
            ->get();

        return view('employees.edit', compact('employee', 'availableComputers'));
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $employee->update([
            'last_name' => $request->input('last_name'),
            'room_number' => $request->input('room_number'),
            'department_name' => $request->input('department_name'),
            'computer_id' => $request->input('computer_id'),
        ]);

        return redirect('/employees')->with('success', 'Employee updated successfully.');
    }

    public function deleteMultiple(Request $request)
    {
        $ids = $request->input('ids');

        if (empty($ids)) {
            return redirect()->back()->with('error', 'Choose emploees to delete.');
        }

        Employee::whereIn('id', $ids)->delete();
        return redirect()->back()->with('success', 'Selected emploees deleted successfully.');
    }
}
