import React, { FC, useState } from 'react';
import image from '../static/logo.png';

const Main: FC = () => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const copyHandler = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500)
  };

  return (
    <div className="main">
      <img src={`.${image}`} alt="logo" />
      <div className="info">
        <p>Для доступа напишите на электроннкю почту</p>
        {isCopy ? (
          <p>Скопировано</p>
        ) : (
          <p onClick={copyHandler}>example@gmail.com</p>
        )}
      </div>
    </div>
  );
};

export default Main;
