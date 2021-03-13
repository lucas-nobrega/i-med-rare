<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acompanhamento extends Model
{
   protected $fillable = [
      'medico_id',
      'paciente_doenca_id',
      'sintomas_identificados',
      'orientacoes_realizadas',
      'data_acompanhamento',
      'data_proxima_consulta'
   ];

   public function medico() {
      return $this->belongsTo(Medico::class);
   }

   public function paciente_doenca()
   {
      return $this->belongsTo(PacienteDoenca::class);
   }

}
