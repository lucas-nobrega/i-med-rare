<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicoEstabelecimentoSaudesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medico_estabelecimento_saudes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('medico_id')->constrained();
            $table->foreignId('estabelecimento_saude_id')->constrained();

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
        Schema::dropIfExists('medico_estabelecimento_saudes');
    }
}
