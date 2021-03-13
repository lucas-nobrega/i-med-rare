<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

class DoencaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = Carbon::now()->format('Y-m-d H:i:s');
        
        DB::table('doencas')->insert([
            'nome' => 'Hemofilia',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('doencas')->insert([
            'nome' => 'Acromegalia',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);

        DB::table('doencas')->insert([
            'nome' => 'Doença de Gaucher',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Distrofia muscular de Duchenne',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Drepanocitose',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Capgras',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Distonia',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Erotomania',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
        DB::table('doencas')->insert([
            'nome' => 'Esclerose lateral amiotrófica',
            'created_at' => $date,
            'updated_at' =>  $date,
        ]);
    }
}