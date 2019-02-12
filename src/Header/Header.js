import React from "react";
import ReactTextRotator from 'react-text-rotator';
import './Header.css'



export default function  Header() {

        return (
            <header>
                <div className='headerImg'>
                    <div className='paragraph'>
                        <MyComponent />   
                    </div>
                </div>
            </header>
        );

    }

    const content = [
        {
          text: 'Hi, .',
          className: 'classA',
          animation: 'fade',
        },
        {
          text: 'We shall fight on the landing grounds.',
          className: 'classA',
          animation: 'fade',
        },
        {
          text: 'We shall fight in the fields and in the streets.',
          className: 'classA',
          animation: 'fade',
        },
        {
          text: 'We shall fight in the hills.',
          className: 'classA',
          animation: 'fade',
        },
        {
          text: 'We shall never surrender...',
          className: 'classA',
          animation: 'fade',
        },
      ];
       
      const MyComponent = () => (
        <div>
          <h1>Aysel Rzayeva</h1>
          <ReactTextRotator
            content={content}
            time={5000}
            startDelay={2000}
          />
        </div>
      );

