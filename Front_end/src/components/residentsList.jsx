import React, { useState, useEffect } from 'react';

const ResidentsList = () => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        // setLoading(true);
        // setError(null);
        
        // const response = await fetch('/api/residents');

        const residents = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Carol Williams" },
    { id: 4, name: "David Brown" },
    { id: 5, name: "Emma Davis" },
    { id: 6, name: "Frank Wilson" },
    { id: 7, name: "Grace Miller" },
    { id: 8, name: "Henry Taylor" }
  ];

  response = residents;
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setResidents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Residents List
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">Loading residents...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Residents List
        </h2>
        <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Error loading residents: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (residents.length === 0) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Residents List
        </h2>
        <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-600">No residents found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Residents List
      </h2>
      
      <div className="space-y-3">
        {residents.map((resident) => (
          <div 
            key={resident.id} 
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-medium rounded-full">
                {resident.id}
              </span>
              <span className="text-gray-800 font-medium">
                {resident.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        Total residents: {residents.length}
      </div>
    </div>
  );
};

export default ResidentsList;