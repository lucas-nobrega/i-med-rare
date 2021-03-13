<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

class AcompanhamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now()->format('Y-m-d H:i:s');  
        
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '1',
            'sintomas_identificados' => 'dores',
            'orientacoes_realizadas' => 'monitoramento',
            'data_acompanhamento' => '12/01/2020', // Formato da data errado 23/01/2020
            'data_proxima_consulta' => '12/04/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '2',
            'sintomas_identificados' => 'sangramento',
            'orientacoes_realizadas' => 'cirurgia',
            'data_acompanhamento' => '01/02/2019',
            'data_proxima_consulta' => '03/05/2019',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '3',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        //
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '2',
            'paciente_doenca_id' => '4',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '5',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '6',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '7',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '8',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '9',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '10',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '11',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '12',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('acompanhamentos')->insert([            
            'medico_id' => '1',
            'paciente_doenca_id' => '13',
            'sintomas_identificados' => 'diarreia',
            'orientacoes_realizadas' => 'comprimido',
            'data_acompanhamento' => '03/03/2020',
            'data_proxima_consulta' => '08/06/2020',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
    }
}