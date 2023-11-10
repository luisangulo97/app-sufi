import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Toast } from "primereact/toast";
import Header from "../Header/Header";
import Table from "../Table/Table";

const DisbursementPage = () => {
  const [visible, setVisible] = useState(false);
  const toastRef = useRef(null);

  const clearToast = () => {
    toastRef.current.clear();
    setVisible(false);
  };

  const showWarningToast = () => {
    if (!visible) {
      setVisible(true);
      setTimeout(() => {
        clearToast();
        toastRef.current.show({
          severity: "warn",
          sticky: true,
          content: (
            <div className="flex flex-column align-items-center" style={{ flex: "1" }}>
              <div>
                <div>
                  Pedro Pérez ha hecho una compra por valor de <strong>$1.800.000</strong>
                </div>
              </div>
            </div>
          ),
        });
      }, 1000);
    }
  };

  useEffect(() => {
    showWarningToast();
  }, []);

  return (
    <div className="disbursement-page">
      <Header />
      <div className="contain">
        <p>Mis desembolsos</p>
        <Button
          icon={<FontAwesomeIcon className="icon-dowloand" icon={faArrowDown} />}
          className="btn"
          label="Descargar"
        />
      </div>
      <Table />
      <Toast ref={toastRef} position="bottom-right" />
    </div>
  );
};

export default DisbursementPage;
