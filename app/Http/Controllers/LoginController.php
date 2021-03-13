<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
use App\Models\Perfil;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {

        if (Auth::attempt(['cpf' =>  $request->input('cpf'), 'password' =>  $request->input('password')])) {
            $request->session()->regenerate();
            $user = Auth::user();
            return response()->json([
                'resultado' => 'sucesso',
                'dados' => new UserResource($user),
                'perfis' => $this->getPerfis($user)
            ]);
        }

        return response()->json([
            'resultado' => 'erro',
            'motivo' => 'CPF ou senha não encontrados'
        ]);
    }

    public function verlogin(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            return response()->json([
                'dados' => new UserResource(Auth::user()),
                'perfis' => $this->getPerfis($user)
            ]);
        }
        return response()->json([
            'resultado' => 'erro',
            'motivo' => 'Usuário não logado'
        ]);
    }

    private function getPerfis($user)
    {
        $perfis = array();

        if ($user->paciente != null) {
            $perfis[] = 'paciente';
        }

        if ($user->medico != null) {
            $perfis[] = 'medico';
            $medico = $user->medico;
            foreach ($medico->perfils as $perfilMedico) {
                $perfis[] = $perfilMedico->descricao;
            }
        }
        return $perfis;
    }

    public function logout(Request $request)
    {

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([
            'resultado' => 'sucesso',
        ]);
    }
}
