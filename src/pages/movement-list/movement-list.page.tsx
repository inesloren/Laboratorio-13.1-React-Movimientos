import React from "react";
import { useParams } from "react-router-dom"; // Importante para capturar el id de la URL
import { MovementVm } from "./movement-list.vm";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getMovementList, getAccountDetail } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";


interface AccountHeaderState {
  name: string;
  iban: string;
  balance: string;
}

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  
  const [accountHeader, setAccountHeader] = React.useState<AccountHeaderState>({
    name: "",
    iban: "",
    balance: "0.00",
  });

  React.useEffect(() => {
    if (id) {
      getAccountDetail(id)
        .then((accountData) => {
          setAccountHeader({
            name: accountData.name,
            iban: accountData.iban,
            balance: accountData.balance.toString(),
          });
        })
        .catch((error) => {
          console.error("Error al obtener los datos de la cuenta:", error);
        });

      getMovementList(id)
        .then((movementsData) => {
          setMovementList(mapMovementListFromApiToVm(movementsData));
        })
        .catch((error) => {
          console.error("Error al obtener los movimientos:", error);
        });
    }
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.balanceContainer}>
            <p className={classes.balanceTitle}>Saldo disponible</p>
            {/* Pintamos el saldo dinámico traído de la API de la cuenta */}
            <p className={classes.balanceAmount}>€ {accountHeader.balance}</p>
          </div>
        </div>
        <div className={classes.informationContainer}>
          {/* Pintamos el Alias y el IBAN dinámicos de la API de la cuenta */}
          <p>Alias: {accountHeader.name}</p>
          <p>IBAN: {accountHeader.iban}</p>
        </div>
        {/* Pasamos los movimientos mapeados a la tabla */}
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};