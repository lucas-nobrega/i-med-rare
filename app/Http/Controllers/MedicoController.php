<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use App\Models\User;
use App\Models\MedicoEspecialidade;
use App\Models\MedicoEstabelecimentoSaude;
use App\Http\Resources\MedicoResource;
use App\Http\Resources\MedicoCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Exception;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function medicosCount()
    {
        return response()->json([
            'quantidade' => Medico::count()
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request) // Como tratar o ids de cidade, perfil, especialidade
    {

        // verifica se o (email,crm e cpf) já existe e retorn um erro em caso positivo
        // encriptar a senha
        $userEmail = User::where('email', '=', $request->input('email'))->first();
        if ($userEmail != null) {
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'O email já foi cadastrado'
            ]);
        }
        $userCPF = User::where('cpf', '=', $request->input('cpf'))->first();
        if ($userCPF != null) {
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'O CPF já foi cadastrado'
            ]);
        }
        $medicoCRM = Medico::where('crm', '=', $request->input('crm'))->first();
        if ($medicoCRM != null) {
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'O CRM já foi cadastrado'
            ]);
        }

        DB::beginTransaction();
        try {
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
                'password' => bcrypt($request->input('password')), // nao esta encriptando!
                'telefone' => $request->input('telefone'),
            ]);
            

            $user->save();
        } catch (Exception $e) {
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar usuario no banco'
            ]);
        }

        try {
            $medico = Medico::create([
                'user_id' => $user->id,
                'perfil_id' => $request->input('perfil_id'),
                'crm' => $request->input('crm'),
            ]);
            $medico->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar dados do medico'
            ]);
        }

        try {
            $medico_especialidade = MedicoEspecialidade::create([
                'medico_id' => $medico->id,
                'especialidade_id' => $request->input('especialidade_id'),
            ]);
            $medico_especialidade->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar especialidade do medico'
            ]);
        }

        try {
            $medico_estabelecimento_saude = MedicoEstabelecimentoSaude::create([
                'medico_id' => $medico->id,
                'estabelecimento_saude_id' => $request->input('estabelecimento_saude_id'),
            ]);
            $medico_estabelecimento_saude->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar estabelecimento de saude do medico'
            ]);
        }

        DB::commit();
        return response()->json([
            'resultado' => 'sucesso',
            'motivo' => 'Médico cadastrado com sucesso'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        return MedicoResource::collection(Medico::select(
            'medicos.id',
            'users.nome as user_nome',
            'especialidades.nome as especialidade_nome',
            'medicos.crm',
            'users.email',
            'users.cpf',
            'users.telefone',
            'users.bairro',
            'users.logradouro',
            'users.numero',
            'users.cep',
            'cidades.nome as nome_cidade',
            'estados.nome as nome_estdado',
            'estados.uf'
        )
            ->join('users', 'medicos.user_id', '=', 'users.id')
            ->join('medico_especialidades', 'medicos.id', '=', 'medico_especialidades.medico_id')
            ->join('especialidades', 'medico_especialidades.especialidade_id', '=', 'especialidades.id')
            ->join('cidades', 'users.cidade_id', '=', 'cidades.id')
            ->join('estados', 'cidades.estado_id', '=', 'estados.id')
            ->where('medicos.id', $id)
            ->get())[0];
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function edit(Medico $medico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Medico $medico)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function destroy(Medico $medico)
    {
        //
    }
}
