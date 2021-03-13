<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcompanhamentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acompanhamentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medico_id')->constrained();
            $table->foreignId('paciente_doenca_id')->references('id')->on('paciente_doenca')->constrained();

            $table->string('sintomas_identificados');
            $table->string('orientacoes_realizadas');
            $table->dateTime('data_acompanhamento', $precision = 0);
            $table->dateTime('data_proxima_consulta', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acompanhamentos');
    }
}
