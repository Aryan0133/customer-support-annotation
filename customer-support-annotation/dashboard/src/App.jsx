
import React, { useState } from 'react';

export default function App() {
  const [data] = useState([]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Support Annotation Dashboard</h1>
      <p>Total Annotated Samples: {data.length}</p>
      <table className="table-auto border mt-4 w-full">
        <thead>
          <tr>
            <th className="border px-2">Query</th>
            <th className="border px-2">Intent</th>
            <th className="border px-2">Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td className="border px-2">{row.userquery}</td>
              <td className="border px-2">{row.intent}</td>
              <td className="border px-2">{row.sentiment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
