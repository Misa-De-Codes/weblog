import React, { useEffect, useState } from 'react';
import Feeds from './components/Feeds';
import Header from './components/Header';

function App() {


  return (
    <>
      <Header />
      <main className="mt-15 ">
        <Feeds />

      </main>

    </>
  );
}

export default App;
