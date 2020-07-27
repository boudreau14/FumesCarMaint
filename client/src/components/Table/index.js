import React from "react";

import "./style.css";

function Table() {
    return (
<section className="tableSect">
 
  <h1>Service Status</h1>
  <div className="tbl-header">
    <table cellPadding={0} cellSpacing={0} border={0}>
      <thead>
        <tr>
          <th>Service 1</th>
          <th>Service 2</th>
          <th>Price</th>
          <th>Date of Service</th>
          <th>Status</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellPadding={0} cellSpacing={0} border={0}>
      <tbody>
        <tr>
          <td>Oil</td>
          <td>Tires </td>
          <td>$75</td>
          <td>TBD</td>
          <td>Incomplete</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</section>

);
}

export default Table;