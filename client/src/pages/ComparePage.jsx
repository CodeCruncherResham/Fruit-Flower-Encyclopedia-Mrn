import React, { useEffect, useState } from "react";
import axios from "axios";

function ComparePage() {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  const fetchData = async () => {
    try {
      const res1 = await axios.get(`/api/fruits/${item1}`);
      const res2 = await axios.get(`/api/fruits/${item2}`);
      setData1(res1.data);
      setData2(res2.data);
    } catch (err) {
      alert("Items not found or error fetching data.");
    }
  };

  return (
    <div>
      <h2 className="text-center">🔍 Compare Fruits</h2>
      <div className="row g-2 mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First Fruit..." onChange={(e) => setItem1(e.target.value)} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Second Fruit..." onChange={(e) => setItem2(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={fetchData}>Compare</button>
        </div>
      </div>

      {data1 && data2 && (
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Feature</th>
                <th>{data1.name}</th>
                <th>{data2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Scientific Name</td><td>{data1.scientificName}</td><td>{data2.scientificName}</td></tr>
              <tr><td>Description</td><td>{data1.description}</td><td>{data2.description}</td></tr>
              <tr><td>Variants</td><td>{data1.variants.join(", ")}</td><td>{data2.variants.join(", ")}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ComparePage;
