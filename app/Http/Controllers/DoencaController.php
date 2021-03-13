<?php

namespace App\Http\Controllers;

use App\Models\Doenca;
use Illuminate\Http\Request;
use App\Http\Resources\DoencaResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Exception;


class DoencaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('relatorio')) {
            if ($request->input('relatorio') == 'pacientes') {
                $groups = Doenca::select(['id', 'nome'])
                    ->withCount('pacientes')
                    ->orderBy('pacientes_count', 'desc')
                    ->take($request->input('quant'))->get();
                return $groups;
            }
         }
        return DoencaResource::collection(Doenca::select('id', 'nome')->get());
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
            $doenca = Doenca::create([
                'nome' => $request->input('nome'),
            ]);
            $doenca->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao savar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao salvar dados da doença'
            ]);
        }

        DB::commit();
        return response()->json([
            'resultado' => 'sucesso',
            'motivo' => 'Doença cadastrada com sucesso'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Doenca  $doenca
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new DoencaResource(Doenca::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Doenca  $doenca
     * @return \Illuminate\Http\Response
     */
    public function edit(Doenca $doenca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Doenca  $doenca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        DB::beginTransaction();
        try {
            $doenca = Doenca::find($id);          
            $doenca->nome =$request->input('nome');

            $doenca->save();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao salvar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao editar doença no banco'
            ]);
        }

        DB::commit();
        return response()->json([
            'resultado' => 'sucesso',
            'motivo' => 'Doença editada com sucesso'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Doenca  $doenca
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        DB::beginTransaction();
        try {
            Doenca::findOrFail($id)->delete();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error('Erro ao deletar no banco: ' . $e->getMessage());
            return response()->json([
                'resultado' => 'erro',
                'motivo' => 'Erro ao deletar doença no banco'
            ]);
        }

        DB::commit();
        return response()->json([
            'resultado' => 'sucesso',
            'motivo' => 'Doença deletada com sucesso'
        ]);
    }
}
