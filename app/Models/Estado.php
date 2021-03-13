<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{   
    protected $fillable = [
        'nome',
        'uf',
    ];
    use HasFactory;

    public function cidades()
    {
        return $this->hasMany(Cidade::class);
    }

    public function users()
    {
      return $this->hasManyThrough(User::class, Cidade::class);
    }
}
