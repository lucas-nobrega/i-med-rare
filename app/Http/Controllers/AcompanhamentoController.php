<?php

namespace App\Http\Controllers;

use App\Models\Acompanhamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AcompanhamentoController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function acompanhamentosCount()
   {
      return response()->json([
         'quantidade' => Acompanhamento::count()
      ]);
   }

   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index(Request $request)
   {
      $casoId = $request->input('caso_id');
      $acompanhamentos = Acompanhamento::whereHas('paciente_doenca', function ($q) use ($casoId) {
         $q->where('id', $casoId);
      })->with('medico.user', function ($q) {
         $q->select(['id', 'nome']);
      })->get(['id', 'data_acompanhamento', 'data_proxima_consulta', 'medico_id']);

      $retorno = [];
      foreach ($acompanhamentos as $acompanhamento) {
         $retorno[] = [
            'acompanhamento_id' => $acompanhamento->id,
            'data_acompanhamento' => date('d-m-Y', strtotime($acompanhamento->data_acompanhamento)),
            'data_proxima_consulta' => date('d-m-Y', strtotime($acompanhamento->data_proxima_consulta)),
            'medico_id' => $acompanhamento->medico_id,
            'medico_nome' => $acompanhamento->medico->user->nome
         ];
      }

      return $retorno;
      //return AcompanhamentoResource::collection(Acompanhamento::select('id','medico_id','paciente_doenca_id')->get());
   }

   /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function create()
   {
      //
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
   public function store(Request $request)
   {

      $dados = [
         "medico_id" => $request->input("idMedico"),
         "paciente_doenca_id" => $request->input("idCaso"),
         "sintomas_identificados" => $request->input("sintomasIdentificados"),
         "orientacoes_realizadas" => $request->input("orientacoesRealizadas"),
         "data_acompanhamento" => $request->input("dataAcompanhamento"),
         "data_proxima_consulta" => $request->input("dataProximaConsulta"),
      ];

      if ($dados["data_proxima_consulta"] == "") {
         return response()->json([
            'resultado' => 'erro',
            'motivo' => 'A data da próxima consulta deve ser preenchida'
         ]);
      }

      try {
         $acompanhamento = Acompanhamento::create($dados);
         $acompanhamento->save();
      } catch (\Exception $e) {
         Log::error('Erro ao savar no banco: ' . $e->getMessage());
         return response()->json([
            'resultado' => 'erro',
            'motivo' => 'Erro ao salvar usuario no banco'
         ]);
      }
      return response()->json([
         'resultado' => 'sucesso'
      ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Models\Acompanhamento  $acompanhamento
    * @return \Illuminate\Http\Response
    */
   public function show($id)
   {
      $acompanhamento = Acompanhamento::with(['medico.user' => function ($q) {
         $q->select(['id', 'nome']);
      }])->find($id, [
         'id',
         'paciente_doenca_id',
         'sintomas_identificados',
         'orientacoes_realizadas',
         'data_acompanhamento',
         'data_proxima_consulta',
         'medico_id'
      ]);

      $retorno = [
         "id" => $acompanhamento->id,
         "sintomas_identificados" => $acompanhamento->sintomas_identificados,
         "data_acompanhamento" => date('Y-m-d', strtotime($acompanhamento->data_acompanhamento)),
         "data_proxima_consulta" => date('Y-m-d', strtotime($acompanhamento->data_proxima_consulta)),
         "medico_id" => $acompanhamento->medico_id,
         "medico_nome" => $acompanhamento->medico->user->nome,
         "paciente_doenca_id" => $acompanhamento->paciente_doenca_id,
         "orientacoes_realizadas" => $acompanhamento->orientacoes_realizadas,
      ];

      return $retorno;
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\Models\Acompanhamento  $acompanhamento
    * @return \Illuminate\Http\Response
    */
   public function edit(Acompanhamento $acompanhamento)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \App\Models\Acompanhamento  $acompanhamento
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, Acompanhamento $acompanhamento)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\Acompanhamento  $acompanhamento
    * @return \Illuminate\Http\Response
    */
   public function destroy(Acompanhamento $acompanhamento)
   {
      //
   }
}
