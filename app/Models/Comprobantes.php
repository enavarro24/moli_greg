<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comprobantes extends Model
{
    use HasFactory;

    protected $table = 'comprobante_caja_chica';
    protected $primaryKey  = 'id';

    protected $fillable = [
        'caja_chica_id',
        'nombre',
        'descripcion',
        'monto',
        'estado_comprobante',
        'codigo',
        'validar_comprobante_retiro',
        'archivo',
    ];

    public function cajaChica()
    {
        return $this->belongsTo(CajaChica::class);
    }
}
