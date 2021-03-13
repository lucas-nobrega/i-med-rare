<?php

namespace App\Http\Controllers;

use App\Models\PacienteDoenca;
use App\Http\Resources\PacienteDoencaResource;
use Illuminate\Http\Request;
use App\Models\Doenca;
use App\Models\Paciente;
use App\Models\Acompanhamento;
use Illuminate\Support\Facades\Auth;

class PacienteDoencaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user != null) {
            if ($user->medico != null) {
                $idMedico = $user->medico->id;
                $pacientes = Paciente::whereHas('doencas', function ($q) use ($idMedico) {
                    $q->where('medico_id', $idMedico);
                })
                    ->with('user:id,nome,email')
                    ->with('doencas:id,nome')
                    ->get(['id', 'user_id']);
                $retorno = [];
                foreach($pacientes as $paciente) {
                    foreach($paciente->doencas as $doenca ) {
                        $retorno[]= [
                            'paciente_id' => $paciente->id,
                            'doenca_id' => $doenca->id,
                            'caso_id' => $doenca->pivot->id,
                            'nome' => $paciente->user->nome,
                            'doenca' => $doenca->nome
                        ];
                    }
                }    
                return  $retorno;
            }
        }

        return PacienteDoencaResource::collection(PacienteDoenca::get());
    }

    public function getDoencas($idPaciente)
    {
        return Paciente::find($idPaciente)->doencas()->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $idPaciente)
    {
        // cadastrar novo registro na tabela paciente_doenca (Pegar o id para cadastrar na proxima tabela)
        // cadastrar entrada na tabela acompanhamentos
        $pacienteDoenca = PacienteDoenca::create([
            'paciente_id' => $idPaciente,
            'doenca_id' => $request->input('doenca_id'),
            'medico_id' => $request->input('medico_id'),
            'data_diagnostico' => $request->input('data_diagnostico'),
            'data_inicio_sintomas' => $request->input('data_inicio_sintomas'),
        ]);
        $pacienteDoenca->save();
        
        $acompanhamento = Acompanhamento::create([
            'medico_id' => $request->input('medico_id'),
            'paciente_doenca_id' => $pacienteDoenca->id,
            'sintomas_identificados' => $request->input('sintomas_identificados'),
            'orientacoes_realizadas' => $request->input('orientacoes_realizadas'),
            "data_acompanhamento" => $request->input("data_acompanhamento"),
            'data_proxima_consulta' => $request->input('data_proxima_consulta'),
        ]);
        $acompanhamento->save();
        
        return $pacienteDoenca;

        $attributes = array(
            'medico_id' => $request->input('medico_id'),
            'data_diagnostico' => $request->input('data_diagnostico'),
            'data_inicio_sintomas' => $request->input('data_inicio_sintomas')
        );

        $salvo = Paciente::find($idPaciente)->doencas()->sync([$request->input('doenca_id') => $attributes], false);

        // Retorna o Id da doença cadastrada para o pacinte
        return $salvo['attached'][0];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PacienteDoenca  $pacienteDoenca
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PacienteDoencaResource(PacienteDoenca::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PacienteDoenca  $pacienteDoenca
     * @return \Illuminate\Http\Response
     */
    public function edit(PacienteDoenca $pacienteDoenca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PacienteDoenca  $pacienteDoenca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PacienteDoenca $pacienteDoenca)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PacienteDoenca  $pacienteDoenca
     * @return \Illuminate\Http\Response
     */
    public function destroy(PacienteDoenca $pacienteDoenca)
    {
        //
    }
}
