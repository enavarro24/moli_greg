<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comprobante_caja_chica', function (Blueprint $table) {
            $table->id();
            $table->foreignId('caja_chica_id')->constrained('caja_chica');
            $table->string('nombre', 60);
            $table->string('descripcion', 150);
            $table->decimal('monto');
            $table->integer('estado_comprobante')->default(0);
            $table->integer('codigo');
            $table->boolean('validar_comprobante_retiro')->default(false);
            $table->string('archivo', 70)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comprobante_caja_chica');
    }
};
