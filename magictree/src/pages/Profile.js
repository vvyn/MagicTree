import React, { useState, useEffect } from 'react';
import TSNE from 'tsne-js';

export function Profile() {
  const [outputScaled, setOutputScaled] = useState([]);

  useEffect(() => {
    const model = new TSNE({
      dim: 2,
      perplexity: 30.0,
      earlyExaggeration: 4.0,
      learningRate: 100.0,
      nIter: 1000,
      metric: 'euclidean'
    });

    const inputData = [
        [-5, -2, 5, -3],
        [1, -3, 3, 3],
        [1, 3, 3, -2],
        [2, 5, 1, -3],
        [-5, 2, 2, 4],
        [0, -5, 0, -1],
        [-2, 5, 5, 0],
        [-4, -2, 0, 0],
        [-2, -3, 4, 2],
        [-3, 2, -2, 1],
        [-5, 2, 0, 1],
        [5, 5, -4, 2],
        [-4, -1, -3, -2],
        [2, 4, 4, -1],
        [-4, -4, 5, 5],
        [0, -1, 3, 5],
        [3, 1, -3, -3],
        [1, 3, 2, 2],
        [4, 3, 2, -2],
        [-5, 5, 3, -4],
        [-2, -3, 2, -1],
        [-4, 2, -1, -2],
        [0, 5, 5, 5],
        [2, 3, -4, 5],
        [0, -1, 2, 4],
        [2, 2, -1, -1],
        [-4, -1, 3, -3],
        [0, 2, 4, 1],
        [-4, -2, 3, 3],
        [-1, 3, -1, -3],
        [3, -2, 1, -2],
        [4, -4, -2, 3],
        [-1, -3, -4, -3],
        [-4, 3, -5, 3],
        [2, 5, -5, -3],
        [-5, -2, -2, 0],
        [5, 1, 4, -5],
        [-5, -4, 4, -5],
        [-3, -1, -4, -4],
        [2, -1, 4, -1],
        [3, -5, 3, 0],
        [1, 3, -2, 4],
        [-2, -1, 2, -2],
        [3, 2, -2, 1],
        [0, -5, -4, -1],
        [3, 0, -4, 5],
        [2, -1, 2, -1],
        [0, 2, 5, -1],
        [-4, 4, 0, -3],
        [1, 1, 4, 4],

    ];

    model.init({
      data: inputData,
      type: 'dense'
    });

    model.run();
    const output = model.getOutputScaled();

    setOutputScaled(output);
  }, []);

  const colors = ['red', 'green', 'blue', 'yellow'];

  return (
    <>
        <div className='text-center text-3xl py-8'>Profile</div>
        <svg width="400" height="400">
        {outputScaled.map((point, index) => (
            <circle
            key={index}
            cx={point[0] * 200 + 200}
            cy={point[1] * 200 + 200}
            r="3"
            fill={colors[index % colors.length]}
            />
        ))}
        </svg>
    </>
  );
}
