/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Love from './assets/gifs/love.gif';
import Loving from './assets/gifs/loving.gif';

function App() {
  const { width, height } = useWindowSize();
  const [posistion, setPosition] = useState(0);
  const [size, setSize] = useState(14);
  const [sayYes, setSayYes] = useState(false);
  // console.log('App -> size', size);

  const texts = [
    'no',
    'are you sure?',
    'really sure?',
    'think again!',
    'last chance!',
    'surely not!',
    'you might regret this!',
    'give it another thought!',
    'are you absolutely certain?',
    'this could be your last chance!',
    'you might not get another chance!',
    'have a heart!',
    "don't be so cruel!",
    'change of heart?',
    `wouldn't you reconsider?`,
    'is that your final answer?',
    "you're breaking my heart :(",
    "you're making a mistake!",
    "you're going to regret this!",
    'ok, I give up!'
  ];

  const handleNoButtonClick = () => {
    const random = (posistion + 1) % texts.length;
    setPosition(random);
    setSize(size + 14);
  };

  const handleYesButtonClick = () => {
    setSayYes(true);
  };

  return (
    <section className="relative h-full w-full">
      {sayYes ? (
        <span className="flex z-0">
          <Confetti
            tweenDuration={120000}
            width={width}
            height={height}
            initialVelocityY={20}
            numberOfPieces={1000}
            recycle={false}
            drawShape={(ctx) => {
              ctx.beginPath();
              for (let i = 0; i < 22; i++) {
                const angle = 0.35 * i;
                const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                ctx.lineTo(x, y);
              }
              ctx.stroke();
              ctx.closePath();
            }}
          />
        </span>
      ) : null}
      <div className="relative container mx-auto h-screen flex justify-center items-center flex-col gap-2 z-10">
        <section className="flex justify-center">
          {sayYes ? (
            <img src={Loving} alt="loving" className="w-1/3" />
          ) : (
            <img src={Love} alt="love" className="w-1/6" />
          )}
        </section>
        <section className="font-bold text-xl text-zinc-800">
          {sayYes ? (
            <section className="font-bold text-md text-zinc-800">
              ok yay!!!
            </section>
          ) : (
            <section className="font-bold text-md text-zinc-800">
              Will you be my valentine?
            </section>
          )}
        </section>
        {!sayYes && (
          <section className="flex flex-row gap-3 items-center">
            <button
              type="button"
              onClick={handleYesButtonClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded lowercase"
              style={{ fontSize: `${size}px` }}
            >
              yes
            </button>
            <button
              type="button"
              onClick={handleNoButtonClick}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded lowercase text-sm"
            >
              {texts[posistion]}
            </button>
          </section>
        )}
      </div>
    </section>
  );
}

export default App;
