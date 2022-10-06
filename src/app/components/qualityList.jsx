import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
export default function QualityList({ qualities }) {
    return (
        <div>
            {qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </div>
    );
}

QualityList.propTypes = {
    qualities: PropTypes.array
};
