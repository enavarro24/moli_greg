@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">Detalle del Comprobante</div>
                    <div class="card-body">
                        <div class="form-group mb-3">
                            <label for="caja_chica_id">Caja Chica</label>
                            <p>{{ $comprobante->cajaChica->nombre }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="nombre">Nombre</label>
                            <p>{{ $comprobante->nombre }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="descripcion">Descripción</label>
                            <p>{{ $comprobante->descripcion }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="monto">Monto</label>
                            <p>{{ $comprobante->monto }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="estado_comprobante">Estado</label>
                            <p>{{ $comprobante->estado_comprobante ? 'Aprobado' : 'Pendiente' }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="validar_comprobante_retiro">Validación</label>
                            <p>{{ $comprobante->validar_comprobante_retiro ? 'Sí' : 'No' }}</p>
                        </div>

                        <div class="form-group mb-3">
                            <label for="archivo">Archivo</label>
                            <p>{{ $comprobante->archivo }}</p>
                        </div>

                        <a href="{{ route('comprobante_caja_chica.index') }}" class="btn btn-secondary">Volver</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
