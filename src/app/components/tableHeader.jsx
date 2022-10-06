import React from "react";
import PropTypes from "prop-types";
import RenderName from "./renderName";
export default function TableHeader({ onSort, selectedSort, columns, sortBy }) {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
            console.log("sortBy", sortBy);
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        <RenderName
                            sortBy={sortBy}
                            name={columns[column].name}
                            column={columns[column].path}
                        />
                    </th>
                ))}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    sortBy: PropTypes.func.array
};
