import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { kmeans } from 'ml-kmeans';
import { useNavigate } from "react-router-dom";

extend({ OrbitControls });

function Controls() {
  const { camera, gl } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} />;
}

export function PeoplePersonalities() {
  const [outputScaled, setOutputScaled] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

    const clusters = kmeans(inputData, 4);

    const colors = [
        new THREE.Color(1, 0.1, 0.1),
        new THREE.Color(0.1, 1, 0.1),
        new THREE.Color(0.1, 0.1, 1),
        new THREE.Color(1, 1, 0.1),
      ];

      setOutputScaled(
        inputData.map((point, index) => ({
          position: [point[0] * 10, point[1] * 10, point[2] * 10],
          color: colors[clusters.clusters[index]],
        }))
      );
  }, []);

  return (
    <div>
        <div className='bg-[#CAC2AF] text-3xl text-white text-4xl lg:text-4xl font-bold text-center text'>Solar System</div>
        <Canvas style={{ height: '89vh', backgroundColor: '#CAC2AF'}}>
            <ambientLight intensity={Math.PI / 2} />
            <Controls />
            {outputScaled.map((point, index) => (
                <mesh key={index} position={point.position}>
                <sphereGeometry args={[3, 16, 16]} />
                <meshBasicMaterial color={point.color} />
                </mesh>
            ))}
        </Canvas>
        <div className=''>
                    <button className="bg-[#2A4223] hover:bg-[#305127] text-white text-xl font-bold w-full py-5 px-4 rounded" onClick={() => navigate('/Transition')}>
                     Back
                    </button> 
                </div>
    </div>
  );
}