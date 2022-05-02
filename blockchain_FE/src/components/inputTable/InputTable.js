import React from "react";
import { rows } from "./rows";
import { columns } from "./columns";
import Table from "../Table_Layout/Table";

export default function InputTable(props){
    const {rows}=props;
    return(
        <Table rows={rows} columns={columns} />
    )
}