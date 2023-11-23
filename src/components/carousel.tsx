import { useState } from 'react';

export function Carousel({ content }: { content: string[] }) {
  const [index, setIndex] = useState(0);
  const data = content;
  const [initialData] = useState(data);

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? initialData.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === initialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <div>
        <img
          src={initialData[index]}
          alt=""
          style={{ height: '100px', width: 'auto' }}
        />
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
}
