<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model 
{
    protected $fillable = [
        'user_id',
        'data_nascimento',
        'profissao',
    ];
    
    public function doencas()
    {
        return $this->belongsToMany(Doenca::class, 'paciente_doenca')
            ->withPivot('id', 'medico_id', 'data_diagnostico', 'data_inicio_sintomas')
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
