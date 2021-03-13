<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use App\Models\Paciente;
use App\Models\User;
use App\Models\Perfil;
use App\Http\Resources\PacienteResource;
use App\Http\Resources\PacienteDoencaResource;
use App\Http\Resources\DoencaResource;
use App\Models\Cidade;
use App\Models\Doenca;
use App\Models\Estado;
use App\Models\Medico;
use App\Models\PacienteDoenca;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\MedicoResource;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
   

   public function getPacientesSemDoenca(Request $request)
   {
      return Paciente::doesntHave('doencas')
         ->with('user',  function ($q) {
            $q->select(['id', 'nome', 'cpf']);
         })
         ->get(['id', 'user_id']);
   }

   public function pacientesCount(Request $request)
   {
      return response()->json([
         'quantidade' => Paciente::count()
      ]);
   }

   public function pacientesCountByUF(Request $request)
   {

      $users = DB::table('users')
         ->join('pacientes', 'users.id', '=', 'pacientes.user_id')
         ->join('cidades', 'cidades.id', '=', 'users.cidade_id')
         ->rightJoin('estados', 'estados.id', '=', 'cidades.estado_id')
         ->groupByRaw('estados.uf, estados.nome')
         ->select(DB::raw('count(pacientes.id) as quant_paciente, estados.uf, estados.nome'))
         ->get();

      return  $users;
   }

   public function getDoencas($idPaciente)
   {

      return $idPaciente;
   }
   public function index(Request $request)
   {
      $aux=true;
      $doencaPaciente = $request->input('doencaPaciente');
      $cpfPaciente = $request->input('cpfPaciente');
      $nomePaciente = $request->input('nomePaciente');
      $pacientesForm = $request->input('pacientes');

      $arraySelect = ['users.id as users_id','pacientes.id as paciente_id','pacientes.profissao','pacientes.data_nascimento',
         'users.nome as user_nome', 'users.email','users.cpf', 'users.telefone', 'users.created_at','users.bairro',
         'users.logradouro', 'users.numero', 'users.cep','cidades.nome as cidade_nome','cidades.id as cidade_id','estados.nome as estdado_nome',
         'estados.id as estado_id','sexos.nome as sexo_nome', 'sexos.id as sexo_id', 'estados.uf',
         'paciente_doenca.paciente_id as doenca_paciente_id',
         'paciente_doenca.medico_id as medico_id',
         'paciente_doenca.doenca_id as doenca_id'
      ];
      

      $arrayOrWhere = array();

      if ($nomePaciente != "") {
         array_push($arrayOrWhere,  ['users.nome', 'ilike', '%' . $nomePaciente . '%']);
         $aux=false;
      }
      if ($cpfPaciente != "") {
         array_push($arrayOrWhere,  ['users.cpf', $cpfPaciente]);
         $aux=false;
      }
      if ($pacientesForm != "" && $pacientesForm != "comDoenca" && $pacientesForm != "todosPacientes") {
         array_push($arrayOrWhere,  ['paciente_doenca.medico_id', $pacientesForm]);
         $aux=false;
      }
      //esse tem que corrigir
      if ($pacientesForm == "comDoenca") {
         array_push($arrayOrWhere,  ['paciente_doenca.paciente_id', '<>', 0]);
         $aux=false;
      }
      if ($doencaPaciente != "" && $doencaPaciente != "0") {
         array_push($arrayOrWhere,  ['paciente_doenca.doenca_id', $doencaPaciente]);
         $aux=false;
      }


      //nomePaciente=ucas  &pacientes=idMedido//todosPacientes//comDoenca  &doencaPaciente=rrrrrrr&  cpfPaciente=53453453453         
      //cpf nome doenca meupacien todos paciente pacientDoenRara
      if (count(collect($request->all())->keys())!=4 &&  $aux===true ) {
         
         $pacientes =  PacienteResource::collection(Paciente::select($arraySelect)
         ->join('users', 'pacientes.user_id', '=', 'users.id')
         ->join('sexos', 'sexos.id', '=', 'users.sexo_id')
         ->join('cidades', 'users.cidade_id', '=', 'cidades.id')
         ->join('estados', 'cidades.estado_id', '=', 'estados.id')
         ->leftJoin('paciente_doenca', 'paciente_doenca.paciente_id', '=', 'pacientes.id')
         ->where($arrayOrWhere)
         ->get()->unique('users_id'));
      }else{
      $pacientes =  PacienteResource::collection(Paciente::select($arraySelect)
         ->join('users', 'pacientes.user_id', '=', 'users.id')
         ->join('sexos', 'sexos.id', '=', 'users.sexo_id')
         ->join('cidades', 'users.cidade_id', '=', 'cidades.id')
         ->join('estados', 'cidades.estado_id', '=', 'estados.id')
         ->join('paciente_doenca', 'paciente_doenca.paciente_id', '=', 'pacientes.id')
         ->where($arrayOrWhere)
         ->get()->unique('users_id'));
      }


     
    
      
     return $pacientes;
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

      $user = User::create([
         'sexo_id' => $request->input('sexo_id'),
         'nome' => $request->input('nome'),
         'email' => $request->input('email'),
         'email_verified_at' => $request->input('email_verified_at'),
         'cpf' => $request->input('cpf'),
         'cidade_id' => $request->input('cidade_id'),
         'bairro' => $request->input('bairro'),
         'cep' => $request->input('cep'),
         'logradouro' => $request->input('logradouro'),
         'numero' => $request->input('numero'),
         'password' => bcrypt($request->input('password')),
         'telefone' => $request->input('telefone'),
      ]);
      $user->save();

      $paciente = Paciente::create([
         'user_id' => $user->id,
         'data_nascimento' => $request->input('data_nascimento'),
         'profissao' => $request->input('profissao'),
      ]);

      $paciente->save();

      return $paciente;
   }

   /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function show($id)
   {
      return new PacienteResource(Paciente::select(
         'pacientes.id',
         'pacientes.profissao',
         'pacientes.data_nascimento',
         'users.nome as user_nome',
         'users.email',
         'users.cpf',
         'users.telefone',
         'users.bairro',
         'users.logradouro',
         'users.numero',
         'users.sexo_id',
         'sexos.nome as sexo_nome',
         'users.cidade_id',
         'users.cep',
         'cidades.nome as nome_cidade',
         'estados.nome as nome_estdado',
         'estados.uf'
      )
         ->join('users', 'pacientes.user_id', '=', 'users.id')
         ->join('sexos', 'users.sexo_id', '=', 'users.sexo_id')
         ->join('cidades', 'users.cidade_id', '=', 'cidades.id')
         ->join('estados', 'cidades.estado_id', '=', 'estados.id')
         ->where('pacientes.id', $id)
         ->first());
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function edit($id)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, $id)
   {

      DB::beginTransaction();
      try {
         $paciente = Paciente::find($id);
         $paciente->data_nascimento = $request->input('data_nascimento');
         $paciente->profissao = $request->input('profissao');

         $paciente->save();
      } catch (Exception $e) {
         DB::rollBack();
         Log::error('Erro ao savar no banco: ' . $e->getMessage());
         return response()->json([
            'resultado' => 'erro',
            'motivo' => 'Erro ao editar paciente no banco'
         ]);
      }


      try {
         $user = User::find($paciente->user_id);
         $user->nome = $request->input('nome');
         $user->sexo_id = $request->input('sexo_id');
         $user->email = $request->input('email');
         $user->cpf = $request->input('cpf');
         $user->cidade_id = $request->input('cidade_id');
         $user->telefone = $request->input('telefone');
         $user->bairro = $request->input('bairro');
         $user->cep = $request->input('cep');
         $user->logradouro = $request->input('logradouro');
         $user->numero = $request->input('numero');

         $user->save();
      } catch (Exception $e) {
         DB::rollBack();
         Log::error('Erro ao savar no banco: ' . $e->getMessage());
         return response()->json([
            'resultado' => 'erro',
            'motivo' => 'Erro ao editar usuario no banco'
         ]);
      }

      try {
         $cidade = Cidade::find($request->input('cidade_id'));
         $cidade->estado_id = $request->input('estado_id');

         $cidade->save();
      } catch (Exception $e) {
         DB::rollBack();
         Log::error('Erro ao savar no banco: ' . $e->getMessage());
         return response()->json([
            'resultado' => 'erro',
            'motivo' => 'Erro ao editar cidade no banco'
         ]);
      }


      DB::commit();
      return response()->json([
         'resultado' => 'sucesso',
         'motivo' => 'Paciente editado com sucesso'
      ]);
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function destroy($id)
   {
      //
   }
}
