<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EstabelecimentoSaudeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade Básica de Saúde',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Central de Gestão em Saúde',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Central de Regulação',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Central de Abastecimento',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Central de Transplante',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Hospital',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Centro de Assistência Obstétrica e Neonatal Normal',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Pronto Atendimento',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Farmácia',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Atenção Hematológica e/ou Hemoterápica',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Núcleo de Telessaúde',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Atenção Domiciliar',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Polo de Prevenção de Doençase Agravos e Promoção da Saúde',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Casas de Apoio à Saúde',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Reabilitação',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Ambulatório',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Atenção Psicossocial',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Apoio Diagnóstico',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Terapias Especiais',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Laboratório de Prótese Dentária',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Unidade de Vigilância de Zoonoses',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Laboratório de Saúde Pública',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Centro de Referência em Saúde do Trabalhador',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Serviço de Verificação de Óbito',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('estabelecimento_saudes')->insert([
            'nome' => 'Centro de Imunização',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
    }
}
