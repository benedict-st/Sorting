import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    let serializationItems = {};
    if (typeof items === "object") {
        serializationItems = items;
    } else {
        serializationItems = items.reduce((acc, a) => {
            acc[a[contentProperty]] = a;
            return acc;
        }, {});
    }
    return (
        <>
            <ul className="list-group">
                {Object.keys(serializationItems).map((item) => (
                    <li
                        key={serializationItems[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (serializationItems[item] === selectedItem
                                ? " active"
                                : "")
                        }
                        onClick={() => onItemSelect(serializationItems[item])}
                        role="button"
                    >
                        {serializationItems[item][contentProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object.isRequired
};

export default GroupList;
