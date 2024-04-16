<?php

use App\Http\Controllers\ComputerController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\SearchController;
//...
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//...

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/employees', [EmployeeController::class, 'index'])->name('employees.index');
Route::post('/employees', [EmployeeController::class, 'create'])->name('employees.store');
Route::get('/employees/create', [EmployeeController::class, 'showCreateForm'])->name('employees.create');
Route::get('/employees/{id}', [EmployeeController::class, 'show'])->where('id', '[0-9]+')->name('employees.show');
Route::get('/employees/{id}/edit', [EmployeeController::class, 'showEditForm'])->name('employees.edit');
Route::put('/employees/{id}', [EmployeeController::class, 'update'])->name('employees.update');

Route::get('/computers/create', [ComputerController::class, 'showCreateForm'])->name('computers.create');
Route::post('/computers', [ComputerController::class, 'create'])->name('computers.store');
Route::get('/computers/{id}', [ComputerController::class, 'show'])->where('id', '[0-9]+')->name('computers.show');
Route::get('/computers', [ComputerController::class, 'index'])->name('computers.index');
Route::get('/computers/{id}/edit', [ComputerController::class, 'showEditForm'])->name('computers.edit');
Route::put('/computers/{id}', [ComputerController::class, 'update'])->name('computers.update');

Route::post('/employees/delete', [EmployeeController::class, 'deleteMultiple'])->name('employees.deleteMultiple');
Route::post('/computers/delete', [ComputerController::class, 'deleteMultiple'])->name('computers.deleteMultiple');

Route::get('/statistics', [StatisticsController::class, 'index'])->name('statistics.index');

Route::get('/search', [SearchController::class, 'showForm'])->name('search.form');
Route::post('/search', [SearchController::class, 'index'])->name('search.index');