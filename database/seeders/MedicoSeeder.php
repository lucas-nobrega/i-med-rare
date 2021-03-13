<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MedicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('medicos')->insert([           
            'user_id' => 1,
            'crm' => '1111111',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('medicos')->insert([            
            'user_id' => 2,
            'crm' => '2222222',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('medicos')->insert([            
            'user_id' => 18,
            'crm' => '4758385',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
        DB::table('medicos')->insert([            
            'user_id' => 19,
            'crm' => '1755345',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
    }
}
