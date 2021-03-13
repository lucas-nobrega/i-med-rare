<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PacienteDoencaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now()->format('Y-m-d H:i:s');
        
        DB::table('paciente_doenca')->insert(
        [    
            'paciente_id' => 1,
            'doenca_id' => 1,
            'medico_id' => 1,
            'data_inicio_sintomas' => date("2021-02-27 12:52:11"),
            'data_diagnostico' => date("2021-02-27 12:52:11"),
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('paciente_doenca')->insert(
        [
           
            'paciente_id' => 2,
            'doenca_id' => 2,
            'medico_id' => 2,
            'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
            'data_diagnostico' => date("2021-02-27 12:52:11"),
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('paciente_doenca')->insert(
        [
           
            'paciente_id' => 3,
            'doenca_id' => 2,
            'medico_id' => 2,
            'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
            'data_diagnostico' => date("2021-02-27 12:52:11"),
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('paciente_doenca')->insert(
        [
           
            'paciente_id' => 4,
            'doenca_id' => 3,
            'medico_id' => 2,
            'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
            'data_diagnostico' => date("2021-02-27 12:52:11"),
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('paciente_doenca')->insert(
        [
           
            'paciente_id' => 5,
            'doenca_id' => 3,
            'medico_id' => 1,
            'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
            'data_diagnostico' => date("2021-02-27 12:52:11"),
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);//
        DB::table('paciente_doenca')->insert(
            [
               
                'paciente_id' => 6,
                'doenca_id' => 6,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]);
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 7,
                'doenca_id' => 5,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 8,
                'doenca_id' => 6,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 9,
                'doenca_id' => 8,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 10,
                'doenca_id' => 7,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 11,
                'doenca_id' => 4,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 12,
                'doenca_id' => 6,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 13,
                'doenca_id' => 6,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 14,
                'doenca_id' => 8,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
        DB::table('paciente_doenca')->insert(
            [
                
                'paciente_id' => 15,
                'doenca_id' => 6,
                'medico_id' => 1,
                'data_inicio_sintomas' =>date("2021-02-27 12:52:11"),
                'data_diagnostico' => date("2021-02-27 12:52:11"),
                'created_at' => $date,
                'updated_at' =>  $date,
            ]
        );
    }
}