import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import Content from './content';
import './App.css';

function App() {
  const [currentContent, setCurrentContent] = useState('home'); // Изначально отображаем "home"
  const [contentVisible, setContentVisible] = useState(true);
  // Функция для обновления состояния контента
  const updateContent = (contentType) => {
    setCurrentContent(contentType);
  };
  // Функция для обновления контента
  
  // Функция для обновления состояния
  const toggleContent = (visible) => {
    setContentVisible(visible); // Когда контент скрыт, передаем false <Content onToggleContent={toggleContent} /> 
  };

  return (
    <div className="App">
      <Header onUpdateContent={updateContent} />
      <Main contentType={currentContent} />
     
      <Footer />
     

    </div>
  );
}

export default App;
