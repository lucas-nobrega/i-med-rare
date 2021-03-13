<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        DB::table('users')->insert([
            ['sexo_id' => 1, 'nome' =>  'Edimar Dantas Nóbrega', 'email' =>  'edimaeag@gamail', 'email_verified_at' => date("2021-02-27 12:52:11"), 'cpf' =>  '99405188038', 'password' => bcrypt('secret'), 
             'cidade_id' => 2999, 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date, 'telefone' =>  '61981465743 '],
            ['sexo_id' => 2, 'nome' =>  'Tatianne Silva Nóbrega', 'email' =>  'tatianeng@gamail', 'email_verified_at' => date("2021-02-27 12:52:19"), 'cpf' =>  '29678222053', 'password' => bcrypt('secret'),  
            'cidade_id' => 1111, 'telefone' =>  '61981465043 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua BB', 'numero' => '567', 'cep' => '88888888', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Lucas Silva Nóbrega', 'email' =>  'lucasnobreag@gamail', 'email_verified_at' => date("2021-02-27 12:52:17"), 'cpf' =>  '29678222051', 'password' => bcrypt('secret'),  
            'cidade_id' => 245, 'telefone' =>  '61981465143 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Leonado Silva Nóbrega', 'email' =>  'leonardonobreag@gamail', 'email_verified_at' => date("2021-02-27 12:52:21"), 'cpf' =>  '61283006006', 'password' => bcrypt('secret'),
            'cidade_id' => 44, 'telefone' =>  '61981463043 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua BB', 'numero' => '567', 'cep' => '88888888', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Thaís Silva Nóbrega', 'email' =>  'thaisnobreag@gamail', 'email_verified_at' => date("2021-02-27 12:52:21"), 'cpf' =>  '36623045031', 'password' => bcrypt('secret'), 
            'cidade_id' => 900, 'telefone' =>  '61981465093 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua BB', 'numero' => '567', 'cep' => '88888888', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'João Silva Nóbrega', 'email' =>  'joaonobreag@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '65635730027', 'password' => bcrypt('secret'), 
            'cidade_id' => 299, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Seed', 'email' =>  'asdf@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '1234123434', 'password' => bcrypt('secret'), 
            'cidade_id' => 747, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date], // =>
            ['sexo_id' => 2, 'nome' =>  'Krysten Blanchard', 'email' =>  'lucassilvanobrega@gmail.com', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '220.699.250-72', 'password' => bcrypt('secret'), 
            'cidade_id' => 100, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Karlene Gregory', 'email' =>  'email1@gmail.com', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '905.700.320-16', 'password' => bcrypt('secret'), 
            'cidade_id' => 1234, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Julia Roberts', 'email' =>  'email2@gmail.com', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '839.485.320-01', 'password' => bcrypt('secret'), 
            'cidade_id' => 432, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Iwan Rheon', 'email' =>  'balela@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '479.447.510-12', 'password' => bcrypt('secret'), 
            'cidade_id' => 657, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Emilie de Ravin', 'email' =>  'seed@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '740.418.580-70', 'password' => bcrypt('secret'), 
            'cidade_id' => 2345, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Steven Spielberg', 'email' =>  'venonextreme@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '519.867.460-54', 'password' => bcrypt('secret'), 
            'cidade_id' => 4653, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Billie Piper', 'email' =>  'drrey@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '756.544.630-04', 'password' => bcrypt('secret'), 
            'cidade_id' => 245, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Al Pacino', 'email' =>  'jukes@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '708.727.470-85', 'password' => bcrypt('secret'), 
            'cidade_id' => 744, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 1, 'nome' =>  'Richard Armitage', 'email' =>  'zedao@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '852.504.160-20', 'password' => bcrypt('secret'), 
            'cidade_id' => 5000, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Seh Loiro', 'email' =>  'doisfenixnumamoto@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '712.781.410-49', 'password' => bcrypt('secret'), 
            'cidade_id' => 3044, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],//
            ['sexo_id' => 2, 'nome' =>  'Dr Pablo', 'email' =>  'pablo@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '547.692.100-19', 'password' => bcrypt('secret'), 
            'cidade_id' => 3044, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date],
            ['sexo_id' => 2, 'nome' =>  'Dr Xandao', 'email' =>  'xandao@gamail', 'email_verified_at' => date("2021-02-27 12:52:41"), 'cpf' =>  '095.318.370-07', 'password' => bcrypt('secret'), 
            'cidade_id' => 3044, 'telefone' =>  '61981465073 ', 'bairro' => 'Camaçari', 'logradouro' => 'Rua AA', 'numero' => '1231', 'cep' => '55555554', 'created_at' => $date, 'updated_at' =>  $date]

        ]);
    }
}
