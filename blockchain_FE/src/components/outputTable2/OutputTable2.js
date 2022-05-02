import React from "react";
import { rows } from "./rowsOut2";
import { columns } from "./columnsOut2";
import Table from "../Table_Layout/Table";

export default function OutputTable2(){
    return(
        <Table rows={rows} columns={columns} />
    )
}