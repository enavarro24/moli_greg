@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Lista de Comprobantes de {{ $cajaChica->nombre }}
                        <a href="{{ route('comprobante_caja_chica.create', $cajaChica->id) }}" class="btn btn-success float-end">Agregar Comprobantes</a>
                    </div>
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success">
                                {{ session('success') }}
                            </div>
                        @endif

                        @if($comprobantes->count() > 0)
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                    <th>Estado</th>
                                    <th>Validación</th>
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($comprobantes as $comprobante)
                                    <tr>
                                        <td>{{ $comprobante->id }}</td>
                                        <td>{{ $comprobante->nombre }}</td>
                                        <td>{{ $comprobante->descripcion }}</td>
                                        <td>{{ $comprobante->monto }}</td>
                                        <td>{{ $comprobante->estado_comprobante ? 'Aprobado' : 'Pendiente' }}</td>
                                        <td>{{ $comprobante->validar_comprobante_retiro ? 'Sí' : 'No' }}</td>
                                        <td>
                                            <a href="{{ route('comprobante_caja_chica.show', [$cajaChica->id, $comprobante->id]) }}" class="btn btn-info">Mostrar</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        @else
                            <p>No hay comprobantes registrados para esta caja chica.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
