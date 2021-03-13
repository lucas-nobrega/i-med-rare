<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('estados')->truncate();
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('estados')->insert([
            ['nome' => 'Acre', 'uf' => 'AC', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Alagoas', 'uf' => 'AL', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Amapá', 'uf' => 'AP', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Amazonas', 'uf' => 'AM', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Bahia', 'uf' => 'BA', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Ceará', 'uf' => 'CE', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Distrito Federal', 'uf' => 'DF', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Espírito Santo', 'uf' => 'ES', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Goiás', 'uf' => 'GO', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Maranhão', 'uf' => 'MA', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Mato Grosso', 'uf' => 'MT', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Mato Grosso do Sul', 'uf' => 'MS', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Minas Gerais', 'uf' => 'MG', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Pará', 'uf' => 'PA', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Paraíba', 'uf' => 'PB', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Paraná', 'uf' => 'PR', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Pernambuco', 'uf' => 'PE', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Piauí', 'uf' => 'PI', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Rio de Janeiro', 'uf' => 'RJ', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Rio Grande do Norte', 'uf' => 'RN', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Rio Grande do Sul', 'uf' => 'RS', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Rondônia', 'uf' => 'RO', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Roraima', 'uf' => 'RR', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Santa Catarina', 'uf' => 'SC', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'São Paulo', 'uf' => 'SP', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Sergipe', 'uf' => 'SE', 'created_at' => $date, 'updated_at' =>  $date],
            ['nome' => 'Tocantins', 'uf' => 'TO', 'created_at' => $date, 'updated_at' =>  $date],
        ]);
    }
}
