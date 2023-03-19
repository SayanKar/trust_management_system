import React from "react";
import { rows } from "./rowsOut1";
import { columns } from "./columnsOut1";
import Table from "../Table_Layout/Table";

export default function OutputTable1(){
    return(
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} 
            id="OutputTable1"
        >
            <Table rows={rows} columns={columns} title="table1"/>
        </div>
    )
}
