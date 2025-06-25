import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import MainCard from './components/MainCard/MainCard';
import VariantCard from './components/VariantCard/VariantCard';
import Button from './components/Button/Button';
import { words } from './fakeData';
import { Word } from './types/word';

function App() {
  const [currentVariants, setCurrentVariants] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState<string | null>(null); 
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null); 
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [isCheckVisible, setIsCheckVisible] = useState(false);


  useEffect(() => {
    if(answerCount >= 10) {
      console.log("Новое достижение: 10 правильных ответов!")
    }
  }, [answerCount])

  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const selectedVariants = shuffled.slice(0, 6);
    setCurrentVariants(selectedVariants);
    const randomIndex = Math.floor(Math.random() * selectedVariants.length);
    setCurrentWord(selectedVariants[randomIndex]);
  }, []);

  const handleAnswer = (translation: string) => {
    const isAnswerCorrect = translation === currentWord?.translation;
    if (selectedTranslation !== null) return; 
    setSelectedTranslation(translation);
    setIsAnswerCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setAnswerCount(answerCount + 1);
      blinkGalochka();
      setTimeout(() => { 
        generateNewWords();
      }, 1000)
    }
  }

  const blinkGalochka = () => {
    setIsCheckVisible(true);

    setTimeout(() => {
      setIsCheckVisible(false);
    }, 1000)
  }

  const generateNewWords = () => {
    setSelectedTranslation(null);
    setIsAnswerCorrect(null);

    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const selectedVariants = shuffled.slice(0, 6);
    setCurrentVariants(selectedVariants);
    const randomIndex = Math.floor(Math.random() * selectedVariants.length);
    setCurrentWord(selectedVariants[randomIndex]);
  }

  if (currentVariants.length !== 6 || !currentWord) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="App">
      <div className='answerCount'>
       <p className='answerCount__text'>
        Правильных ответов: {answerCount}
        <span className={isCheckVisible ? "answerCount__galochka visible" : "answerCount__galochka"}>
          &nbsp;✅
        </span>        
      </p>
      </div>

      <MainCard 
        text={currentWord?.word}
        isCorrect={isAnswerCorrect}  
      />

      <ul className="variants__list">
        {
          currentVariants.map((item) => (
            <VariantCard
              key={item.word}
              text={item.translation}
              onClick={() => handleAnswer(item.translation)}
              isSelected={selectedTranslation === item.translation}
              isCorrect={item.translation === currentWord.translation}
              isDisabled={selectedTranslation !== null} 
            />
          ))
        }
      </ul>

      <ul className="controls__list">
        <li className="control__item">
          <Button onClick={() => generateNewWords()} text={"Next"}/>
        </li>
      </ul>
    </div>
  );
}

export default App;
