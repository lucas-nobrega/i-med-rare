<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;


class User extends Model  implements AuthenticatableContract
{
    use Authenticatable;
    
    protected $fillable = [
        'nome',
        'endereco_id',
        'sexo_id',
        'email',
        'email_verified_at',
        'cpf',
        'password',
        'telefone',
        'cep',
        'bairro',
        'logradouro',
        'numero',
        'cidade_id',
    ];

    use HasFactory;
    public function paciente()
    {
        return $this->hasOne(Paciente::class);
    }
    public function medico()
    {
        return $this->hasOne(Medico::class);
    }
}

