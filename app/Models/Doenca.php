<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doenca extends Model
{
    protected $fillable = [
        'id',
        'nome',
    ];
    
    public function pacientes()
    {
        return $this->belongsToMany(Paciente::class, 'paciente_doenca')
            ->withPivot('id','medico_id', 'data_diagnostico', 'data_inicio_sintomas')
            ->withTimestamps();
    }
}
