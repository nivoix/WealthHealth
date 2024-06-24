import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { employeeList } from "../assets/datas/datasMock";

export const employeesInfo = createSlice({
  name: "employees",
  initialState: { employeeList: employeeList },
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.employeeList.push(newEmployee);
    },
    deleteEmployee: (state, action) => {
      state.employeeList = state.employeeList.filter(
        (e) => e.id !== action.payload
      );
    },
  },
});

export const { addEmployee, deleteEmployee } = employeesInfo.actions;

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  employeesInfo.reducer
);

export const store = configureStore({
  reducer: { employees: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
