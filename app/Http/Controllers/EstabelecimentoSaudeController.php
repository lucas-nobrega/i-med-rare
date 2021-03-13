<?php

namespace App\Http\Controllers;

use App\Models\EstabelecimentoSaude;
use App\Http\Resources\EstabelecimentoSaudeResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Exception;

class EstabelecimentoSaudeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return EstabelecimentoSaudeResource::collection(EstabelecimentoSaude::get());
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
        //
        DB::beginTransaction();
        try {
            $estabelecimento = EstabelecimentoSaude::create([
                'nome' => $request->input('nome')
            ]);
            $estabelecimento->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar dados do estabelecimento de saúde'
            ]);
        }

        DB::commit();
        return response()->json([
            'resultado' => 'sucesso',
            'motivo' => 'Estabelecimento de saúde cadastrado com sucesso'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EstabelecimentoSaude  $estabelecimentoSaude
     * @return \Illuminate\Http\Response
     */
    public function show(EstabelecimentoSaude $estabelecimentoSaude)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstabelecimentoSaude  $estabelecimentoSaude
     * @return \Illuminate\Http\Response
     */
    public function edit(EstabelecimentoSaude $estabelecimentoSaude)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EstabelecimentoSaude  $estabelecimentoSaude
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EstabelecimentoSaude $estabelecimentoSaude)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EstabelecimentoSaude  $estabelecimentoSaude
     * @return \Illuminate\Http\Response
     */
    public function destroy(EstabelecimentoSaude $estabelecimentoSaude)
    {
        //
    }
}
