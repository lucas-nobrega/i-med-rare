import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usuarioService from '../../../services/usuarioService'


export const loginAction = createAsyncThunk(
    "usuario/login",
    (credenciais, { getState }) => {
        return  usuarioService.login(credenciais);
    }
);

export const verLoginAction = createAsyncThunk(
    "usuario/verlogin",
    ( ) => {
        return  usuarioService.verLogin();
    }
);

export const logoutAction = createAsyncThunk(
    "usuario/logout",
    ( ) => {
        return  usuarioService.logout();
    }
);

// (success | error | warning | info) Para usar com o componente Alert
export const tiposMensagens = {
    'SUCESSO': 'success',
    'ERRO' : 'danger',
    'ALERTA' : 'warning',
    'INFO' : 'info'
}

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        aguardandoDados : false,
        logado : false,
        aguardandoVerlogin : false,
        dados: {},
        perfis: [],
        mensagemRetorno: '',
        tipoMensagem: tiposMensagens.SUCESSO 
    },
    reducers: {
        fecharMensagemAction: (state, action) => {
            state.mensagemRetorno = ''
        },
        setMensagemAction: (state, action) => {
            state.mensagemRetorno = action.payload.mensagem;
            state.tipoMensagem = action.payload.tipoMensagem;
        },
    },
    extraReducers: {
        [loginAction.pending]: state => {
            state.aguardandoDados = true;
        },
        [loginAction.fulfilled]: (state, action) => {
            state.aguardandoDados = false;
            if(action.payload.resultado==='erro') {
                state.tipoMensagem = tiposMensagens.ERRO;
                state.mensagemRetorno = action.payload.motivo
                return;
            }
            state.logado = true;
            state.dados = action.payload.dados;
        },
        [loginAction.rejected]: (state, action) => {
            state.aguardandoRegistro = false;
            state.mensagemRetorno = action.payload;
            state.tipoMensagem = tiposMensagens.ERRO;
        },
        [verLoginAction.pending]: state => {
            state.aguardandoVerlogin = true;
        },
        [verLoginAction.fulfilled]: (state, action) => {
            state.aguardandoVerlogin = false;
            if(action.payload.resultado==='erro') {
                return;
            }
            state.perfis = action.payload.perfis;
            state.logado = true;
            state.dados = action.payload.dados;
        },
        [logoutAction.fulfilled]: (state, action) => {
            if(action.payload.resultado==='erro') {
                return;
            }
            state.logado = false;
        },
        [verLoginAction.rejected]: (state, action) => {
            state.aguardandoVerlogin = false;
           // state.mensagemRetorno = action.payload;
           // state.tipoMensagem = tiposMensagens.ERRO;
        }
    }
});

export const { fecharMensagemAction, setMensagemAction } = usuarioSlice.actions;

export default usuarioSlice.reducer;