import React, { useState, useEffect } from 'react';

const ResidentWithPayments = () => {
  const [userData, setUserData] = useState(null); // Changed from array to single object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('http://127.0.0.1:5219/api/Residents/1');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUserData(data); // Set the single user object
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPaymentType = (type) => {
    const types = {
      0: 'Credit Card',
      1: 'Debt',
    };
    return types[type] || 'Unknown';
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Payments</h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Payments</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading data</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle case where userData is null or undefined
  if (!userData) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Payments</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">No user data found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Payments</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {userData.name}
          </h2>
          <span className="text-sm text-gray-500">ID: {userData.id}</span>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            Payments ({userData.payments?.length || 0})
          </h3>
          
          {userData.payments && userData.payments.length > 0 ? (
            userData.payments.map((payment) => (
              <div key={payment.id} className="bg-gray-50 rounded-md p-4 border-l-4 border-blue-500">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Payment ID:</span>
                    <p className="font-medium text-gray-800">{payment.id}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600">Type:</span>
                    <p className="font-medium text-gray-800">{getPaymentType(payment.type)}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600">Amount:</span>
                    <p className="font-medium text-green-600">${payment.amount}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600">Date:</span>
                    <p className="font-medium text-gray-800">{formatDate(payment.date)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No payments found for this resident.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentWithPayments;