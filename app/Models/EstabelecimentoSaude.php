<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstabelecimentoSaude extends Model
{
    protected $fillable = [
        'id',
        'nome',
    ];
    
    use HasFactory;
}
