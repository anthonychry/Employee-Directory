import React from "react";
import "./tablehead.css"

function TableHead() {

    return (
        <table className="table theading">
            {/* <thead>
            <tr> */}
            <button type="button" class="btn btn-link">Photo:</button>
            <button type="button" class="btn btn-link">Name:</button>
            <button type="button" class="btn btn-link">Phone:</button>
            <button type="button" class="btn btn-link">Email:</button>
            <button type="button" class="btn btn-link">DOB:</button>
            {/* </tr>
        </thead> */}
      </table>
    )
}

export default TableHead;