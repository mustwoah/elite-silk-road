import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import Scene from './components/Scene'
import UIOverlay from './components/UIOverlay'
import LoadingScreen from './components/LoadingScreen'
import { Suspense } from 'react'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [0, 10, 30], fov: 65 }}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 30, 200]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[15, 20, 10]} intensity={2} color="#00d4ff" />
        <pointLight position={[-20, -10, -20]} intensity={1} color="#dc2626" />
        <Stars radius={400} depth={80} count={10000} factor={8} fade speed={2} />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
      <UIOverlay />
    </>
  )
}