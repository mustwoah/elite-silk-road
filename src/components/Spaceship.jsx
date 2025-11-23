// src/components/Spaceship.jsx  ← REPLACE ENTIRE FILE WITH THIS
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

export default function Spaceship() {
  const ref = useRef()

  useFrame((state) => {
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.15) * 40
    ref.current.position.y = 8 + Math.sin(state.clock.elapsedTime * 0.3) * 6
    ref.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={ref}>
      <mesh castShadow>
        <coneGeometry args={[4, 12, 16]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0, -5, 0]}>
        <cylinderGeometry args={[5, 3, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* THIS FONT WORKS 100% */}
      <Center position={[0, 0, 6]}>
        <Text3D
          font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"
          size={1.5}
          height={0.4}
        >
          ELITE ONE
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
        </Text3D>
      </Center>

      <pointLight intensity={6} distance={50} color="#00d4ff" />
    </group>
  )
}