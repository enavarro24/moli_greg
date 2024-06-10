@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Crear Caja Chica</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('caja_chica.store') }}" >
                            @csrf
                            <input type="hidden" name="id" value="1" />

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Nombre</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="nombre" id="nombre" required />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Descripcion</label>

                                <div class="col-md-6">
                                    <textarea class="form-control" name="descripcion" id="descripcion" required></textarea>
                                </div>
                            </div>


                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Guardar
                                        </button>
                                        <a href="{{ url()->previous() }}">
                                            <button type="button" class="btn btn-secondary">Cancelar</button>
                                        </a>
                                    </div>
                                </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
