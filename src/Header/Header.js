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
          text: 'Hi, I am a Web Developer from London, UK.',
          className: 'classA',
          animation: 'fade',
        },
        {
          text: 'Nice to meet You !',
          className: 'classA',
          animation: 'fade',
        },
        
      ];
       
      const MyComponent = () => (
        <div>
          <h1 className='header-title'>Aysel Rzayeva</h1>
          <ReactTextRotator
            content={content}
            time={4000}
            startDelay={3000}
          />
        </div>
      );

