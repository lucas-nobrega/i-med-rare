<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EncryptCookies;
use Illuminate\Session\Middleware\StartSession;


use App\Http\Controllers\CidadeController;
use App\Http\Controllers\EstadoController;
use App\Http\Controllers\MedicoController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SexoController;
use App\Http\Controllers\EspecialidadeController;
use App\Http\Controllers\EstabelecimentoSaudeController;
use App\Http\Controllers\DoencaController;
use App\Http\Controllers\PacienteDoencaController;
use App\Http\Controllers\AcompanhamentoController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {

    # Autenticacão
    Route::post('/user/login', [LoginController::class,   'authenticate'])
    ->middleware(EncryptCookies::class);
    Route::get('/user/verlogin', [LoginController::class,  'verlogin']);
    Route::get('/user/logout', [LoginController::class,  'logout']);

    #
    Route::get('/pacientes/{id_paciente}/acompanhamentos', [ PacienteController::class,  'getAcompanhamentosPaciente']);
    Route::get('/pacientes/{id_paciente}/doencas', [ PacienteDoencaController::class,  'getDoencas']);
    Route::post('/pacientes/{id_paciente}/doencas', [ PacienteDoencaController::class,  'store']);

    #pacientesCountByUF
    Route::get('/medicos/medicoscount', [MedicoController::class,  'medicosCount']);
    Route::get('/pacientes/pacientescount', [PacienteController::class,  'pacientesCount']);
    Route::get('/pacientes/pacientescountbyuf', [PacienteController::class,  'pacientesCountByUF']);
    Route::get('/pacientes/semdoenca', [PacienteController::class,  'getPacientesSemDoenca']);

    Route::get('/acompanhamentos/acompanhamentosCount', [AcompanhamentoController::class,  'acompanhamentosCount']);
    Route::delete('/doencas/{id_doenca}', [ DoencaController::class,  'destroy']);

    # Recursos
    Route::apiResource('cidades', CidadeController::class);
    Route::apiResource('estados', EstadoController::class);
    Route::apiResource('medicos', MedicoController::class);
    Route::apiResource('pacientes', PacienteController::class);
    Route::apiResource('doencas', DoencaController::class);
    Route::apiResource('sexos', SexoController::class);
    Route::apiResource('especialidades', EspecialidadeController::class);
    Route::apiResource('estabelecimentosaudes', EstabelecimentoSaudeController::class);
    Route::apiResource('pacientedoencas', PacienteDoencaController::class);
    Route::apiResource('acompanhamentos', AcompanhamentoController::class);
});

/*
Route::group([
    'prefix' => 'v1'
], function ($router) {
    Route::apiResource('user', 'UserController');
    Route::apiResource('cidade', 'CidadeController');
    
    
});
*/