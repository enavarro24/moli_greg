<?php

use App\Http\Controllers\CajaChicaController;
use App\Http\Controllers\ComprobantesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Rutas cajas chica
Route::resource('/caja_chica', CajaChicaController::class);
Route::get('/caja_chica/{id}', [CajaChicaController::class, 'show'])->name('caja_chica.show');
Route::delete('/caja_chica/{id}', [CajaChicaController::class, 'destroy'])->name('caja_chica.destroy');


// Rutas de todos los comprobantes
Route::get('/comprobantes/{id}', [ComprobantesController::class, 'index'])->name('comprobante_caja_chica.index');
Route::get('/comprobante/{id}', [ComprobantesController::class, 'show'])->name('comprobante_caja_chica.show');
Route::get('comprobante_caja_chica/{id}', [ComprobantesController::class, 'create'])->name('comprobante_caja_chica.create');
Route::post('/comprobante/', [ComprobantesController::class, 'store'])->name('comprobante_caja_chica.store');
Route::post('/subir-comprobante', [CajaChicaController::class, 'upload']);

