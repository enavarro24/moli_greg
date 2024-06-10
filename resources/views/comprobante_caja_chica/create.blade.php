@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">Agregar Comprobante</div>
                    <div class="card-body">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form method="POST" action="{{ route('comprobante_caja_chica.store') }}" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group mb-3">
                                <label for="caja_chica_id">Caja Chica</label>
                                <select class="form-control" id="caja_chica_id" name="caja_chica_id">
                                    @foreach($cajasChicas as $cajaChica)
                                        <option value="{{ $cajaChica->id }}">{{ $cajaChica->nombre }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" value="{{ old('nombre') }}">
                            </div>

                            <div class="form-group mb-3">
                                <label for="descripcion">Descripción</label>
                                <textarea class="form-control" id="descripcion" name="descripcion">{{ old('descripcion') }}</textarea>
                            </div>

                            <div class="form-group mb-3">
                                <label for="monto">Monto</label>
                                <input type="number" step="0.01" class="form-control" id="monto" name="monto" value="{{ old('monto') }}">
                            </div>

                            <div class="form-group mb-3">
                                <label for="codigo">Código presupuestario</label>
                                <input type="number" step="" class="form-control" id="codigo" name="codigo" value="{{ old('codigo') }}">
                            </div>

                            <div class="form-group mb-3">
                                <label for="archivo">Archivo (PDF)</label>
                                <input type="file" class="form-control" id="archivo" name="archivo" accept="application/pdf">
                            </div>

                            <button type="submit" class="btn btn-primary">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
