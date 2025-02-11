import React, { useState } from 'react';

const KanbanBoard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', background: darkMode ? '#1E1E2F' : '#F4F4F7' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', background: darkMode ? '#2C2C38' : 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#C4C4C4' }}></div>
            <span style={{ color: '#635FC7', fontWeight: 'bold' }}>Log In</span>
          </div>

          <p style={{ fontSize: '12px', color: 'gray', textTransform: 'uppercase' }}>All Boards (3)</p>

          <div style={{ background: '#635FC7', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
            <span>📌 Platform Launch</span>
          </div>
          <div style={{ padding: '10px', color: '#828FA3', cursor: 'pointer' }}>📌 Marketing Plan</div>
          <div style={{ padding: '10px', color: '#828FA3', cursor: 'pointer' }}>📌 Roadmap</div>
          <div style={{ padding: '10px', color: '#635FC7', cursor: 'pointer' }}>📋 + Create New Board</div>
        </div>

        {/* Dark Mode Toggle */}
        <div>
          <div style={{ background: '#E4E4E7', padding: '10px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>☀</span>
            <button
              style={{
                width: '40px',
                height: '20px',
                background: darkMode ? '#635FC7' : '#C4C4C4',
                borderRadius: '20px',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  background: 'white',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '1px',
                  left: darkMode ? '20px' : '2px',
                  transition: '0.3s',
                }}
              ></div>
            </button>
            <span>🌙</span>
          </div>

          <div style={{ padding: '10px', color: '#828FA3', cursor: 'pointer', marginTop: '10px' }}>👁 Hide Sidebar</div>
        </div>
      </div>

      {/* Kanban Board */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ color: darkMode ? 'white' : 'black' }}>Platform Launch</h1>
          <button style={{ padding: '10px 20px', background: '#635FC7', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>+ Add New Task</button>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          {['🔵Todo', '🟣Doing', '🟢Done'].map((column, index) => (
            <div key={index} style={{ width: '300px' }}>
              <h2 style={{ color: darkMode ? 'white' : '#635FC7' }}>{column}</h2>
              <div style={{ background: '#E4E4E7', padding: '15px', borderRadius: '5px' }}>
                <div style={{ background: 'white', padding: '10px', borderRadius: '3px', marginBottom: '10px' }}>Task 1</div>
                <div style={{ background: 'white', padding: '10px', borderRadius: '3px', marginBottom: '10px' }}>Task 2</div>
                <div style={{ background: 'white', padding: '10px', borderRadius: '3px' }}>Task 3</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
