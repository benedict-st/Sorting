import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualityList from "./qualityList";
import Table from "./table";
export default function UsersTable({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    sortBy
}) {
    const columns = {
        name: {
            path: "name",
            name: "Имя"
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualityList qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессии" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };

    return (
        // <table className="table">
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
            sortBy={sortBy}
        />
        // {/* <TableHeader {...{ onSort, selectedSort, columns }} />
        // <TableBody {...{ columns, data: users }} /> */}
        // {/* <tbody>
        //     {users.map((user) => (
        //         <User {...rest} {...user} key={user._id} />
        //     ))}
        // </tbody> */}
        // </table>
    );
}

UsersTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    sortBy: PropTypes.func.array
};
