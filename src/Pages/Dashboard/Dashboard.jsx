// src/components/Dashboard.js
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
      <Sidebar />
        <div className="p-4">
          <h1 className="text-2xl font-bold">Hello, John Smith</h1>
          <p className="text-gray-600 mt-2">
            Welcome to your dashboard, this is your space to view and manage all
            the moving parts of your account.
          </p>

          <section className="mt-8 bg-purple-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Tier 2: Buyer and Seller
              </h2>
              <button className="text-sm text-purple-700">hide</button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-gray-700">Identity Verification</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Requirements: Basic information, setup wallet, and password
                </p>
                <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded">
                  Verify my identity
                </button>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-gray-700">Address Verification</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Requirement: Proof of address, identification document
                </p>
                <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded">
                  Verify my address
                </button>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold">My Garage</h2>
            <div className="flex flex-col md:flex-row items-center space-x-4 mt-4">
              <select className="p-2 border rounded-lg mb-4 md:mb-0">
                <option>Status</option>
              </select>
              <input
                type="text"
                placeholder="Search by name"
                className="p-2 border rounded-lg mb-4 md:mb-0"
              />
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Add my car
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Tier 2 is required to unlock the feature.
            </p>
          </section>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
