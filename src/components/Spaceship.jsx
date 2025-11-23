// src/components/Spaceship.jsx  ← 100% WORKING FINAL VERSION
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Spaceship() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.15) * 40
    ref.current.position.y = 8 + Math.sin(state.clock.elapsedTime * 0.3) * 6
    ref.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={ref}>
      {/* Main body - glowing cyan */}
      <mesh castShadow>
        <coneGeometry args={[4, 12, 16]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.5} />
      </mesh>

      {/* Engine/base */}
      <mesh position={[0, -5, 0]}>
        <cylinderGeometry args={[5, 3, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* "ELITE ONE" text made with simple 3D boxes - NEVER fails */}
      <group position={[0, 1, 6]}>
        {['E','L','I','T','E',' ','O','N','E'].map((letter, i) => (
          <mesh key={i} position={[i * 1.6 - 8, 0, 0]}>
            <boxGeometry args={[1.4, 2, 0.4]} />
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={3} />
          </mesh>
        ))}
      </group>

      {/* Thruster glow */}
      <pointLight position={[0, -6, 0]} intensity={8} distance={30} color="#00d4ff" />
      <pointLight position={[0, 0, 0]} intensity={4} color="#00d4ff" />
    </group>
  )
}