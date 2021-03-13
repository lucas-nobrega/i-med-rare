import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pacienteService from '../../../services/pacienteService'

export const getPacienteAction = createAsyncThunk(
    "paciente/getpaciente",
    (id, { getState }) => {
        return  pacienteService.getPaciente(id);
    }
);
export const getPacientesAction = createAsyncThunk(
    "paciente/getpacientes",
    ( ) => {
        return  pacienteService.getPacientes();
    }
);

// (success | error | warning | info) Para usar com o componente Alert
export const tiposMensagens = {
    'SUCESSO': 'success',
    'ERRO' : 'danger',
    'ALERTA' : 'warning',
    'INFO' : 'info'
}

const pacienteSlice = createSlice({
    name: 'paciente',
    initialState: {
        aguardandoDadosPaciente : false,
        aguardandoDadosPacientes : false,
        dadosPaciente: {},
        dadosPacientes: [],
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
        [getPacienteAction.pending]: state => {
            state.aguardandoDadosPaciente = true;
        },
        [getPacienteAction.fulfilled]: (state, action) => {
            state.aguardandoDadosPaciente = false;
            state.dadosPaciente = action.payload.data;
        },
        [getPacienteAction.rejected]: (state, action) => {
            state.aguardandoDadosPaciente = false;
            state.mensagemRetorno = action.payload;
            state.tipoMensagem = tiposMensagens.ERRO;
        },
        [getPacientesAction.pending]: state => {
            state.aguardandoDadosPacientes = true;
        },
        [getPacientesAction.fulfilled]: (state, action) => {
            state.aguardandoDadosPacientes = false;
            state.dadosPacientes = action.payload.data;
        },
        [getPacientesAction.rejected]: (state, action) => {
            state.aguardandoDadosPacientes = false;
            state.mensagemRetornoPacientes = action.payload;
            state.tipoMensagemPacientes = tiposMensagens.ERRO;
        }
    },
  
});

export const { fecharMensagemAction, setMensagemAction } = pacienteSlice.actions;

export default pacienteSlice.reducer;