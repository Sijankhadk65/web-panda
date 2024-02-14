import { useState } from 'react';
import gifImage from './assets/intro.gif'
import yesGifImage from './assets/yers.gif'
import noGifImage from './assets/no.gif'

function App() {

  const [buttonSize, setButtonSize] = useState(50);
  const [selectedGif, setSelectedGif] = useState(gifImage);
  const [canSayNo, setCanSayNo] = useState(true);
  const [messageCounter, setMessageCounter] = useState(0);


  const messages = [
    "No",
    "Are you sure???",
    "Really Sure?",
    "Think Again",
    "Last Chance",
    "Surely not????",
    "You might regret this!!!",
    "Give me a last chance",
    "Abosutely Certain",
    "Have heart...",
    "Don't be so cold",
    "This could be a mistake",
    "Change of heart??",
    "Won't you reconsider?",
    "This could be a mistake",
    "You're breaking my heart :(",
  ];

  const handleNoButtonClick = (e) => {
    e.preventDefault()
    if (canSayNo) {
      const newSize = buttonSize > 160 ? buttonSize : buttonSize + 10;
      setButtonSize(newSize);
      setSelectedGif(noGifImage);
      var newCount = messageCounter + 1;
      if (newCount < 16) {
        setMessageCounter(newCount);
      } else {
        setMessageCounter(messageCounter);
      }

    }
  };

  const handleYesButtonClick = (e) => {
    e.preventDefault()
    setSelectedGif(yesGifImage);
    setCanSayNo(false);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <img src={selectedGif} width={400} alt="GIF" />
      </div>
      <div>
        {canSayNo ? (<div className="flex flex-col gap-4 items-center"><div className='text-7xl font-bold text-center'>
          Will you be my valentine?
        </div>
          <div className='flex flex-row gap-3'>
            <div className='cols-span-1'>
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" style={{
                width: `${buttonSize}px`,
                height: `${buttonSize - 10}px`,
              }}
                onClick={handleYesButtonClick}>Yes</button>
            </div>
            <div className='cols-span-1'><button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={handleNoButtonClick}>{messages[messageCounter]}</button></div>
          </div></div>) : (<div><div className='text-7xl font-bold text-center'>
            Ok, Yaaaa!!!
          </div></div>)}
      </div>
    </div >
  );
}

export default App;
