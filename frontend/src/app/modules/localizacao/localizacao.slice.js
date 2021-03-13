import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import localizacaoService from '../../../services/localizacaoService'

export const getCidadesAction = createAsyncThunk(
    "localizacao/getcidades",
    (estado_id, { getState }) => {
        return  localizacaoService.getCidades(estado_id);
    }
);
export const getEstadosAction = createAsyncThunk(
    "localizacao/getestados",
    () => {
        return  localizacaoService.getEstados();
    }
);

// (success | error | warning | info) Para usar com o componente Alert
export const tiposMensagens = {
    'SUCESSO': 'success',
    'ERRO' : 'error',
    'ALERTA' : 'warning',
    'INFO' : 'info'
}

const localizacaoSlice = createSlice({
    name: 'localizacao',
    initialState: {
        aguardandoDados : false,
        cidades: [],
        estados: [],
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
        [getCidadesAction.pending]: state => {
            state.aguardandoDados = true;
        },
        [getCidadesAction.fulfilled]: (state, action) => {
            state.aguardandoDados = false;
            state.cidades = action.payload.data;
        },
        [getCidadesAction.rejected]: (state, action) => {
            state.aguardandoRegistro = false;
            state.mensagemRetorno = action.payload;
            state.tipoMensagem = "error";
        },
        [getEstadosAction.pending]: state => {
            state.aguardandoDados = true;
        },
        [getEstadosAction.fulfilled]: (state, action) => {
            state.aguardandoDados = false;
            state.estados = action.payload.data;
        },
    }
});

export const { fecharMensagemAction, setMensagemAction } = localizacaoSlice.actions;

export default localizacaoSlice.reducer;