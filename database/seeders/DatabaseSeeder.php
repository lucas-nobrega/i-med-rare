<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(SexoSeeder::class);
        $this->call(EstadoSeeder::class);
        $this->call(CidadeSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(EspecialidadeSeeder::class);
        $this->call(PerfilSeeder::class);
        $this->call(MedicoSeeder::class);
        $this->call(EstabelecimentoSaudeSeeder::class);
        $this->call(MedicoEstabelecimentoSaudeSeeder::class);
        $this->call(MedicoEspecialidadeSeeder::class); 
        $this->call(DoencaSeeder::class); 
        $this->call(PacienteSeeder::class);
        $this->call(PacienteDoencaSeeder::class);
        $this->call(MedicoPerfilSeeder::class);
        $this->call(AcompanhamentoSeeder::class);
          
    }
}
