import { Float } from '@react-three/drei'

export default function Relics() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[-30, 10, -60]}>
          <torusKnotGeometry args={[5, 1.5, 128, 16]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1.5} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[35, 15, -80]}>
          <dodecahedronGeometry args={[6]} />
          <meshStandardMaterial color="#dc2626" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </>
  )
}