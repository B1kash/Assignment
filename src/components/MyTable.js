import React, { useEffect, useState } from 'react';

const MockData = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'John' },
  { name: 'Mary' },
  { name: 'John' },
  { name: 'Jane' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Peter' },
  { name: 'Mary' },
  { name: 'Mary' },
];

const MyTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Count the occurrences of each name
    const nameCounts = MockData.reduce((counts, { name }) => {
      counts[name] = (counts[name] || 0) + 1;
      return counts;
    }, {});

    // Format the table data with distinct names and duplicate counts
    const formattedData = Object.entries(nameCounts).map(([name, count]) => ({
      name,
      count,
    }));

    setTableData(formattedData);
  }, []);

  const getRowColor = (count) => {
    if (0 < count && count < 3) {
      return 'red';
    } else if (2 < count && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    }
    return '';
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Duplicate Count</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ name, count }) => (
          <tr key={name} style={{ backgroundColor: getRowColor(count)}}>
            <td>{name}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
