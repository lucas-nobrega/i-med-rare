<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PerfilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('perfils')->insert([            
            'descricao' => 'medicoadm',
            'created_at' => $date, 
            'updated_at' =>  $date,
        ]);
    }
}
