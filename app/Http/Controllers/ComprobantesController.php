<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComprobantesRequest;
use App\Http\Requests\UpdateComprobantesRequest;
use App\Models\CajaChica;
use App\Models\Comprobantes;

class ComprobantesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $cajaChica = CajaChica::findOrFail($id);
        $comprobantes = Comprobantes::where('caja_chica_id', $id)->get();
        return view('comprobante_caja_chica.index', compact('cajaChica', 'comprobantes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $cajasChica = CajaChica::findOrFail($id);
        $cajasChicas = CajaChica::all();
        return view('comprobante_caja_chica.create', compact('cajasChicas', 'cajasChica'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreComprobantesRequest $request, $caja_chica_id)
    {
        $comprobante = new Comprobantes($request->all());
        $comprobante->caja_chica_id = $caja_chica_id;

        if ($request->hasFile('archivo')) {
            $filePath = $request->file('archivo')->store('comprobantes', 'public');
            $comprobante->archivo = $filePath;
        }

        $comprobante->save();

        return redirect()->route('comprobante_caja_chica.index', $caja_chica_id)->with('success', 'Comprobante creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $comprobante = Comprobantes::findOrFail($id);
        return view('comprobante_caja_chica.show', compact('comprobante'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comprobantes $comprobantes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateComprobantesRequest $request, Comprobantes $comprobantes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comprobantes $comprobantes)
    {
        //
    }
}
