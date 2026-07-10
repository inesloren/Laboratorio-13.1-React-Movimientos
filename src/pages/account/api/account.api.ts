import Axios from "axios";
import { Account } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: Account): Promise<boolean> =>
  Axios.post<Account>(urlAccount, account)
    .then(() => true)
    .catch(() => false);