<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sexo_id')->constrained();
            $table->foreignId('cidade_id')->constrained();
            
            $table->string('nome');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('cpf')->unique();
            $table->string('password');
            $table->string('telefone'); // não precisaria ter uma tabela só de telefone?
            //Endereço
            $table->string('bairro');
            $table->string('cep');
            $table->string('logradouro');
            $table->string('numero');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
