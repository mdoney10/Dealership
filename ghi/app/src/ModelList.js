import { useEffect, useState } from 'react';

function ModelList() {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8100/api/models/');
      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      } else {
        setError("Failed to fetch models");
      }
    } catch (error) {
      setError("An error occurred while fetching models");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.manufacturer.name}</td>
              <td>
                <img src={model.picture_url} height={200} width={250} alt={`Model ${model.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModelList;