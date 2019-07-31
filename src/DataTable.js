import React from 'react'
import { Table } from 'antd'
const DataTable = (props) => {
    let { loading, data, active } = props;
    if (!active) return null;
    const columns = [
        {
            title: 'Word',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Frequency',
            dataIndex: 'total',
            key: 'total',
        },

    ];

    return (
        <Table dataSource={data} loading={loading} columns={columns} />
    )
}

export default React.memo(DataTable)
