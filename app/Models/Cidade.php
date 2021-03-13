<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{
   protected $fillable = [
      'nome',
   ];

   use HasFactory;

   public function users()
   {
      return $this->hasMany(User::class);
   }
}
