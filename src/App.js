import './style/app.scss';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dialog } from './components/Dialog';



function App() {
  return (
    <div className="container">
        <Header />
        <Dialog />
    </div>
  );
}

export default App;
