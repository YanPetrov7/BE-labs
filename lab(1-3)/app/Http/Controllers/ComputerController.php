<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;

class ComputerController extends Controller
{
  public function show($id)
  {
    $computer = Computer::find($id);

    if (!$computer) {
      return view('computers.empty_computer_table');
    }

    return view('computers.show', compact('computer'));
  }

  public function showCreateForm()
  {
    return view('computers.create');
  }

  public function create(Request $request)
  {
    $computer = new Computer();
    $computer->computer_model = $request->input('computer_model');
    $computer->serial_number = $request->input('serial_number');
    $computer->brand = $request->input('brand');
    $computer->save();

    return redirect('/computers')->with('success', 'Computer created successfully.');
  }

  public function showEditForm($id)
  {
    $computer = Computer::findOrFail($id);
    return view('computers.edit', compact('computer'));
  }

  public function update(Request $request, $id)
  {
    $computer = Computer::findOrFail($id);
    $computer->computer_model = $request->input('computer_model');
    $computer->serial_number = $request->input('serial_number');
    $computer->brand = $request->input('brand');
    $computer->save();

    return redirect('/computers')->with('success', 'Computer updated successfully.');
  }

  public function index()
  {
    $computers = Computer::all();
    return view('computers.index', compact('computers'));
  }

  public function deleteMultiple(Request $request)
  {
    $ids = $request->input('ids');

    if (empty($ids)) {
      return redirect()->back()->with('error', 'Choose computers to delete.');
    }

    Computer::whereIn('id', $ids)->delete();
    return redirect()->back()->with('success', 'Selected computers deleted successfully.');
  }
}
