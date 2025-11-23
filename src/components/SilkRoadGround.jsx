import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SilkRoadGround() {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.z = s.clock.elapsedTime * 0.02
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow>
      <planeGeometry args={[500, 500, 256, 256]} />
      <meshStandardMaterial color="#1a1a1a" emissive="#00d4ff" emissiveIntensity={0.15} roughness={0.9} />
    </mesh>
  )
}