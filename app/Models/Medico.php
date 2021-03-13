<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    protected $fillable = [
        'user_id',
        'crm',
    ];

    public function perfils()
    {
        return $this->belongsToMany(Perfil::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
