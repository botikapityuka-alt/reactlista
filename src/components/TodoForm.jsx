import React, { useState } from 'react';

// Ez a komponens megkapja a 'props'-ot, ami tartalmazza az 'addTodoFunction'-t az App.jsx-ből
function TodoForm({ addTodoFunction }) {
  
  // 1. ÁLLAPOT: Lokális állapot az input mezőben lévő szöveg tárolására
  const [inputValue, setInputValue] = useState('');

  // 2. KÉZELŐ FÜGGVÉNY: A Form elküldésekor fut le
  const handleSubmit = (event) => {
    // Megakadályozzuk az oldal újratöltését (ez a form alapértelmezett viselkedése)
    event.preventDefault(); 
    
    // Ellenőrizzük, hogy az input nem üres-e, és levágjuk a felesleges szóközöket
    if (inputValue.trim() === '') {
      return; // Ha üres, nem csinálunk semmit
    }

    // 3. VISSZAHÍVÁS: Meghívjuk az App.jsx-ből kapott függvényt,
    // átadva neki a felhasználó által beírt szöveget.
    addTodoFunction(inputValue.trim());

    // 4. RESET: Töröljük az input mező tartalmát az elküldés után
    setInputValue(''); 
  };

  // 5. MEGJELENÍTÉS
  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Új teendő..."
        // Az input értéke mindig a lokális állapotból származik
        value={inputValue} 
        // Amikor a felhasználó gépel, frissítjük az állapotot
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button 
        type="submit"
        style={{ padding: '10px 15px', cursor: 'pointer' }}
      >
        Hozzáadás
      </button>
    </form>
  );
}

export default TodoForm;