import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import TSNE from 'tsne-js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { kmeans } from 'ml-kmeans';

extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} />;
}

export function PeoplePersonalities() {
  const [outputScaled, setOutputScaled] = useState([]);

  useEffect(() => {
    const model = new TSNE({
      dim: 3,
      perplexity: 30.0,
      earlyExaggeration: 4.0,
      learningRate: 100.0,
      nIter: 1000,
      metric: 'euclidean',
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
      type: 'dense',
    });

    model.run();
    const output = model.getOutputScaled();

    const clusters = kmeans(output, 4);

    const colors = [
        new THREE.Color(1, 0.1, 0.1),
        new THREE.Color(0.1, 1, 0.1),
        new THREE.Color(0.1, 0.1, 1),
        new THREE.Color(1, 1, 0.1),
      ];

      setOutputScaled(
        output.map((point, index) => ({
          position: [point[0] * 10, point[1] * 10, point[2] * 10],
          color: colors[clusters.clusters[index]],
        }))
      );
  }, []);

  return (
    <div>
        <div className='bg-[#CAC2AF] text-3xl text-center text'>Personalitity Compatibility</div>
        <Canvas style={{ height: '100vh', backgroundColor: '#CAC2AF'}}>
            <ambientLight intensity={Math.PI / 2} />
            <Controls />
            {outputScaled.map((point, index) => (
                <mesh key={index} position={point.position}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshBasicMaterial color={point.color} />
                </mesh>
            ))}
        </Canvas>
    </div>
  );
}