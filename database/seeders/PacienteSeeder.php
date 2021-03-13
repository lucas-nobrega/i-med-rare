<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

class PacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now()->format('Y-m-d H:i:s');

        DB::table('pacientes')->insert([            
            'user_id' => 3,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Advogado',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('pacientes')->insert([            
            'user_id' => 4,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Rainha',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 5,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Juiz',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('pacientes')->insert([            
            'user_id' => 6,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Professor',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 7,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Day Trader',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);//
        DB::table('pacientes')->insert([            
            'user_id' => 8,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Analista de segurança',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 9,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Pivite',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 10,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Rei',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 11,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Bispo',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 12,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Humorista',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 13,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Aprendiz',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 14,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Caça-feitiço',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 15,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Programador',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 16,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Coach',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('pacientes')->insert([            
            'user_id' => 17,
            'data_nascimento' =>  date("2021-02-27 12:52:11"),
            'profissao' => 'Pedreiro',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
    }
}