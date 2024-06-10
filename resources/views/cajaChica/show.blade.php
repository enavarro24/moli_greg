@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="card-header">
                        Información de la Caja Chica
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('caja_chica.update', ['caja_chica' => $cajaChica->id]) }}">
                            @csrf
                            @method('PUT')

                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" value="{{ $cajaChica->nombre }}">
                            </div>

                            <div class="form-group">
                                <label for="descripcion">Descripción:</label>
                                <textarea class="form-control" id="descripcion" name="descripcion">{{ $cajaChica->descripcion }}</textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Actualizar</button>

                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Eliminar
                            </button>

                            <a href="{{ url()->previous() }}">
                                <button type="button" class="btn btn-secondary">Cancelar</button>
                            </a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Eliminar Caja Chica</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>¿Está seguro de que desea eliminar esta caja chica? Esta acción no se puede deshacer.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" id="deleteButton" data-caja-chica-id="{{ $cajaChica->id }}">Eliminar</button>
                </div>
            </div>
        </div>
    </div>

    @section('scripts')
        <script>
            $(document).ready(function() {
                $('#deleteButton').click(function() {
                    // Obtener el ID de caja chica desde el atributo data
                    let cajaChicaId = $(this).data('caja-chica-id');

                    // Enviar una solicitud AJAX a la ruta de destrucción
                    $.ajax({
                        url: "{{ route('caja_chica.destroy', ':caja_chica_id') }}".replace(':caja_chica_id', cajaChicaId),
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function(response) {
                            // Manejar la eliminación exitosa
                            $('#exampleModal').modal('hide');
                            alert('Caja Chica eliminada exitosamente.');
                            window.location.href = "{{ url()->previous() }}"; // Redirigir a la página anterior
                        },
                        error: function(error) {
                            // Manejar la respuesta de error
                            $('#exampleModal').modal('hide');
                            window.location.href = "{{ url()->previous() }}"; // Redirigir a la página anterior
                        }
                    });
                });
            });
        </script>
    @endsection
@endsection
