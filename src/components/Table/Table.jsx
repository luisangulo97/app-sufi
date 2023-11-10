import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import data from "../../assets/mock-data.json";
import { getDocumentTypes, formatCurrency } from "../../utils/utils";
import moment from "moment/moment";

const Table = () => {
  const [first, setFirst] = useState(0);
  const [dataFiltered, setDataFiltered] = useState(data);
  const documentTypes = getDocumentTypes(data);
  const [filters, setFilters] = useState({
    docType: null,
    docNumber: "",
    disbursementNumber: "",
    fromDate: null,
    toDate: null,
  });

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      const docType = !filters.docType || item.documentType === filters.docType;
      const docNumber =
        !filters.docNumber ||
        item.documentNumber.toString().startsWith(filters.docNumber);
      const disbursementNumber =
        !filters.disbursementNumber ||
        item.disbursementNumber.toString().startsWith(filters.disbursementNumber);
      const fromDate =
        !filters?.fromDate ||
        moment(item?.datetime, "DD/MM/YYYY").toDate() >=
          moment(filters?.fromDate, "DD/MM/YYYY").toDate();
      const toDate =
        !filters?.toDate ||
        moment(item?.datetime, "DD/MM/YYYY").toDate() <=
          moment(filters?.toDate, "DD/MM/YYYY").toDate();
      return docType && docNumber && disbursementNumber && fromDate && toDate;
    });

    setDataFiltered(filteredData);
  };

  const renderHeader = () => (
    <div className="filters">
      <div>
        <Dropdown
          value={filters.docType}
          options={documentTypes}
          onChange={(e) => setFilters({ ...filters, docType: e.value })}
          placeholder="Tipo doc."
          showClear
          style={{ minWidth: "12rem" }}
        />
      </div>
      <div>
        <InputText
          value={filters.docNumber}
          placeholder="Número de documento"
          onChange={(e) =>
            setFilters({ ...filters, docNumber: e.target.value })
          }
        />
      </div>
      <div>
        <InputText
          value={filters.disbursementNumber}
          placeholder="Número de desembolso"
          onChange={(e) =>
            setFilters({ ...filters, disbursementNumber: e.target.value })
          }
        />
      </div>
      <div>
        <Calendar
          value={filters?.fromDate}
          onChange={(e) => setFilters({ ...filters, fromDate: e.value })}
          placeholder="Desde"
          showIcon
          dateFormat="dd/mm/yy"
        />
      </div>
      <div>
        <Calendar
          value={filters?.toDate}
          onChange={(e) => setFilters({ ...filters, toDate: e.value })}
          placeholder="Hasta"
          showIcon
          dateFormat="dd/mm/yy"
          minDate={filters?.fromDate}
        />
      </div>
    </div>
  );

  useEffect(() => {
    handleFilter();
  }, [filters]);

  return (
    <DataTable
      paginator
      rows={16}
      rowsPerPageOptions={[16, 30, 50]}
      header={renderHeader}
      stripedRows
      tableStyle={{ minWidth: "50rem" }}
      value={dataFiltered}
      paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown"
      currentPageReportTemplate="{first} de {last}"
    >
      <Column field="datetime" header="Fecha y Hora" />
      <Column field="disbursementNumber" header="Número de desembolso" />
      <Column field="documentType" header="Tipo de documento" />
      <Column field="documentNumber" header="Número de documento" />
      <Column
        header="Monto"
        body={(e) => formatCurrency({ value: e?.amount })}
      />
    </DataTable>
  );
};

export default Table;
