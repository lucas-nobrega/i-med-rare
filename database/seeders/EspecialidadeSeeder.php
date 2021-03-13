<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class EspecialidadeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array_especialidades = array(
        "Acupuntura",
        "Alergia e imunologia",
        "Anestesiologia",
        "Angiologia",
        "Cardiologia",
        "Cirurgia cardiovascular",
        "Cirurgia da mão",
        "Cirurgia de cabeça e pescoço",
        "Cirurgia do aparelho digestivo",
        "Cirurgia geral",
        "Cirurgia oncológica",
        "Cirurgia pediátrica",
        "Cirurgia plástica",
        "Cirurgia torácica",
        "Cirurgia vascular",
        "Clínica médica",
        "Coloproctologia",
        "Dermatologia",
        "Endocrinologia e metabologia",
        "Endoscopia",
        "Gastroenterologia",
        "Genética médica",
        "Geriatria",
        "Ginecologia e obstetrícia",
        "Hematologia e hemoterapia",
        "Homeopatia",
        "Infectologia",
        "Mastologia",
        "Medicina de emergência",
        "Medicina de família e comunidade",
        "Medicina do trabalho",
        "Medicina de tráfego",
        "Medicina esportiva",
        "Medicina física e reabilitação",
        "Medicina intensiva",
        "Medicina legal e perícia médica",
        "Nefrologia",
        "Neurocirurgia",
        "Neurologia",
        "Nutrologia",
        "Oftalmologia",
        "Oncologia clínica",
        "Ortopedia e traumatologia",
        "Otorrinolaringologia",
        "Patologia",
        "Patologia clínica/medicina laboratorial",
        "Pediatria",
        "Pneumologia",
        "Psiquiatria",
        "Radiologia e diagnóstico por imagem",
        "Radioterapia",
        "Reumatologia",
        "Urologia");
        
        $date =  Carbon::now()->format('Y-m-d H:i:s');
        foreach ($array_especialidades as $especialidade){
            DB::table('especialidades')->insert([
                'nome' => $especialidade,
                'created_at' => $date, 
                'updated_at' =>  $date,
            ]);
        }

    }
}
