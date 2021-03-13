import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import localizacaoSlice from './app/modules/localizacao/localizacao.slice.js';
import usuarioSlice from './app/modules/usuario/usuario.slice';
import pacienteSlice from './app/modules/paciente/paciente.slice';
import logger from './logger.js';


const store = configureStore({
    reducer: {
        localizacao: localizacaoSlice,
        usuario: usuarioSlice,
        paciente: pacienteSlice,
    },
    middleware: [...getDefaultMiddleware(), logger]
});

export default store;