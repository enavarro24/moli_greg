<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CajaChica extends Model
{
    use HasFactory;

    protected $table = "caja_chica";
    protected $primarykey = "id";
    protected $fillable = [
        'nombre',
        'descripcion',
        'estado',
    ];

    public function comprobantes()
    {
        return $this->hasMany(Comprobantes::class);
    }

}
