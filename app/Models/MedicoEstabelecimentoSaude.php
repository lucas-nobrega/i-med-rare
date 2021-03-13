<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicoEstabelecimentoSaude extends Model
{
    protected $fillable = [
        'medico_id',
        'estabelecimento_saude_id',
    ];
    use HasFactory;
}
