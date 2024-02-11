import React,  { useEffect, useRef } from 'react';
import $ from "jquery";
import "jquery/"

const Table = (props) => {
    $.DataTable = require("datatables.net");
    const tableRef = useRef();
    useEffect(() => {
      console.log(tableRef.current);
      const table = $(tableRef.current).DataTable({
        data: props.data,
        columns: props.columns,
        destroy: true, // I think some clean up is happening here
        ordering: true,
        responsive: true,
        autoWidth: true,
      });
      // Extra step to do extra clean-up.
      return function () {
        console.log("Table destroyed");
        table.destroy();
      };
    }, [props.columns, props.data]);
  return (
    <div>
      <table className="display"  ref={tableRef}></table>
    </div>
  );
}

export default Table
