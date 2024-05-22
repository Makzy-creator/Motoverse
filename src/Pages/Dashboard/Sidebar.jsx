// src/components/Sidebar.js

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-50 p-4">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-32 mx-auto" />
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">home</span>
              <span className="ml-3">Overview</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">directions_car</span>
              <span className="ml-3">My Garage</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">verified_user</span>
              <span className="ml-3">Verification</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="material-icons">settings</span>
              <span className="ml-3">Setting</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
