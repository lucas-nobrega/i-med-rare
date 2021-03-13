<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    protected $fillable = [ 
        'id',       
        'descricao',
    ];
    use HasFactory;
    
}
