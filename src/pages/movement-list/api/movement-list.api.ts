import Axios from "axios";
import { Movement, Account } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
// Revisa si tu endpoint de cuentas es /account, /accounts o /account-list en tu servidor
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account`; 

// API 1: Obtener la lista de movimientos filtrada por cuenta
export const getMovementList = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

// API 2: Obtener los datos generales de una cuenta específica
export const getAccountDetail = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccount}/${accountId}`).then(({ data }) => data);