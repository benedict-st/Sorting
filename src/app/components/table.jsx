import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
export default function Table({ onSort, selectedSort, columns, data, sortBy }) {
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns, sortBy }} />
            <TableBody {...{ columns, data: data }} />
        </table>
    );
}

Table.propTypes = {
    data: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.func.object,
    sortBy: PropTypes.func.array
};
