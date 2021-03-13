<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PacienteDoenca extends Model
{    

    protected $table = 'paciente_doenca';

    protected $fillable = [
        'paciente_id',
        'doenca_id',
        'medico_id',
        'data_diagnostico',
        'data_inicio_sintomas',
    ];
    use HasFactory;
    
}
