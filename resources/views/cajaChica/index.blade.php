@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-md-10 ">
            @if(session('message'))
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endif
            @if ($cajas->count() > 0)
                <div class="row">
                    @foreach ($cajas as $cajaChica)
                        <div class="col-md-4 col-sm-6">  <div class="card mb-3">
                                <div class="card-header">
                                    {{ $cajaChica->nombre }}
                                </div>
                                <div class="card-body">

                                    <p>{{ $cajaChica->descripcion }}</p>

                                    <span class="badge badge-{{ $cajaChica->estado ? 'success' : 'danger' }}">
                                         {{ $cajaChica->estado ? 'Activo' : 'Inactivo' }}
                                    </span>
                                </div>

                                <div class="col-md-2 d-flex justify-content-between m-2">
                                    <a href="{{ route('comprobante_caja_chica.index' , ['id' => $cajaChica->id]   ) }}">
                                        <button type="button" class="btn btn-secondary flex-grow-0">Ver Comprobantes</button>
                                    </a>

                                    <span class="d-flex align-items-center mx-1"></span>
                                    <a href="{{ route('caja_chica.show' , ['id' => $cajaChica->id]   ) }}">
                                        <button type="button" class="btn btn-primary flex-grow-0">Ver </button>  </a>
                                </div>

                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                <p>No hay cajas chicas registradas.</p>
            @endif
            <a class="btn btn-success btn-block mt-4" href="{{route('caja_chica.create')}}">Agregar nueva</a>
        </div>
    </div>
@endsection
