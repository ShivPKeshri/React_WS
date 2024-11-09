import { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css"; // import Alpine theme

const AgGridQuickStart = () => {
  const CustomButtonComponent = (props) => {
    return <button onClick={() => window.alert("clicked")}>Push Me!</button>;
  };

  // Row Data: The data to be displayed.
  // const [rowData, setRowData] = useState([
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  // ]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json") // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => {
        setRowData(rowData);
      }); // Update state of `rowData`
  }, []);

  console.log(rowData);

  // Column Definitions: Defines the columns to be displayed.
  // const [colDefs, setColDefs] = useState([
  //   {
  //     field: "make",
  //     flex: 2,
  //     filter: true,
  //     floatingFilter: true,
  //     editable: true,
  //     cellEditor: "agSelectCellEditor",
  //     cellEditorParams: {
  //       values: ["Tesla", "Ford", "Toyota"],
  //     },
  //   }, //This column will be twice as wide as the others
  //   { field: "model", flex: 1, editable: true },
  //   { field: "price", flex: 1 },
  //   { field: "electric", flex: 1 },
  //   { field: "button", cellRenderer: CustomButtonComponent },
  // ]);

  // Custom Cell Renderer (Display flags based on cell value)
  const CompanyLogoRenderer = ({ value }) => (
    <span
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      {value && (
        <img
          alt={`${value} Flag`}
          src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
          style={{
            display: "block",
            width: "25px",
            height: "auto",
            maxHeight: "50%",
            marginRight: "12px",
            filter: "brightness(1.1)",
          }}
        />
      )}
      <p
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </p>
    </span>
  );

  const [colDefs, setColDefs] = useState([
    { field: "mission" },
    { field: "company", cellRenderer: CompanyLogoRenderer },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ]);

  const defaultColDef = useMemo(() => ({
    filter: true, // Enable filtering on all columns
  }));

  return (
    <div
      className="ag-theme-alpine-dark" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
      />
    </div>
  );
};

export default AgGridQuickStart;
