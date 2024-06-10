<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCajaChicaRequest;
use App\Http\Requests\UpdateCajaChicaRequest;
use App\Models\CajaChica;

class CajaChicaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cajas = CajaChica::all();
        return view('cajaChica.index', compact('cajas'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('cajaChica.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCajaChicaRequest $request)
    {
        $validatedData = $request->validated();
        $cajaChica = CajaChica::create($validatedData);

        return redirect()->route('caja_chica.index')->with('success', 'Registro creado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(CajaChica $cajaChica)
    {
        return view('cajaChica.show', compact('cajaChica'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CajaChica $cajaChica)
    {
        return view('cajaChica.edit', compact('cajaChica'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCajaChicaRequest $request, CajaChica $cajaChica)
    {
        $cajaChica->update($request->validated());
        return redirect()->route('caja_chica.index', $cajaChica)->with('success', 'Registro actualizado exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cajaChica = CajaChica::findOrFail($id);
        $cajaChica->delete();
        return redirect()->route('caja_chica.index')->with('success', 'Registro eliminado exitosamente');
    }
}
