import React from 'react';

// Ez a komponens megkapja a 'props'-ot, ami tartalmazza a 'todos' listát
// és a 'deleteTodoFunction'-t az App.jsx-ből
function TodoList({ todos, deleteTodoFunction }) {
  
  // Ellenőrizzük, hogy van-e teendő
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.2em' }}>
             Nincsenek teendők! Kezdj el hozzáadni néhányat.
           </p>;
  }

  // 1. MEGJELENÍTÉS: A lista megjelenítése
  return (
    <ul style={{ listStyleType: 'none', padding: 0, width: '400px', margin: '30px auto' }}>
      {/* 2. CIKLUS: Végigmegyünk a todos (teendők) tömbön a map() függvénnyel */}
      {todos.map((todo) => (
        // Minden listaelemnek KELL EGY EGYEDI 'key' prop! Ez kritikus Reactban.
        <li 
          key={todo.id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px 15px',
            marginBottom: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
          }}
        >
          {/* A teendő szövege */}
          <span>{todo.text}</span>
          
          {/* Törlés gomb */}
          <button
            // Amikor a gombra kattintunk, meghívjuk a szülőtől kapott függvényt,
            // átadva neki a törlendő teendő ID-jét.
            onClick={() => deleteTodoFunction(todo.id)}
            style={{ 
              backgroundColor: '#ff4d4d', 
              color: 'white', 
              border: 'none', 
              borderRadius: '3px', 
              padding: '5px 10px', 
              cursor: 'pointer' 
            }}
          >
            Törlés
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;