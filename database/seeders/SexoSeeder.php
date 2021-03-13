<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SexoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('sexos')->truncate();        
       $date =  Carbon::now()->format('Y-m-d H:i:s');
       DB::table('sexos')->insert([ [ 'nome' => 'Masculino', 'created_at' => $date, 'updated_at' =>  $date],
                                    [ 'nome' => 'Feminino', 'created_at' => $date, 'updated_at' =>  $date],
          
        ]);
    }
}
