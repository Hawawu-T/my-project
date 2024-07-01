import React, { useState } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <button
        className="lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        Toggle Sidebar
      </button>
      <div
        className={`lg:w-1/3 xl:w-1/4 p-4 bg-gray-100 h-screen fixed top-0 left-0 lg:relative lg:top-auto lg:left-auto transition duration-300 ease-in-out ${
          showSidebar ? "block" : "hidden"
        }`}
      >
        {/* Sidebar content here */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        </div>
    </div>
  );
}

export default Sidebar;

