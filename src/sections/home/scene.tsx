import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { CircularProgress } from '@nextui-org/react';
import { OrbitControls } from '@react-three/drei';
import Model from './model';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 9 }}
      className='w-full'
      style={{ height: '350px' }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={<CircularProgress />}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
      />
    </Canvas>
  )
}

export default Scene