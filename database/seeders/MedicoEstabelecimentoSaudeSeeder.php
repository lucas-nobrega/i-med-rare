<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MedicoEstabelecimentoSaudeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('medico_estabelecimento_saudes')->insert([            
            'medico_id' => 1,
            'estabelecimento_saude_id' => 1,
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
    }
}
