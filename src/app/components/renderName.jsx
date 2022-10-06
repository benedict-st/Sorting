import React from "react";
import PropTypes from "prop-types";

export default function RenderName({ sortBy, name, column }) {
    return (
        <>
            {sortBy.path !== undefined &&
            sortBy.path === column &&
            sortBy.order === "asc" ? (
                <i className="bi bi-caret-down-fill">{name}</i>
            ) : sortBy.path === column && sortBy.order === "desc" ? (
                <i className="bi bi-caret-up-fill">{name}</i>
            ) : (
                <>{name}</>
            )}
        </>
    );
}

RenderName.propTypes = {
    sortBy: PropTypes.object.isRequired,
    name: PropTypes.toString,
    column: PropTypes.toString
};
