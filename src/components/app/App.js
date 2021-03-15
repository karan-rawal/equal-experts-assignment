import { useState } from 'react';
import { CATEGORIES } from '../../utils/constants';
import HeaderComponent from '../header/header.component';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);

  return (
    <div className="App">
      <HeaderComponent
        categories={CATEGORIES}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory} />
    </div>
  );
}

export default App;
