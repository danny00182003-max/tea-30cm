import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Shard() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.35
    ref.current.rotation.x += dt * 0.12
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[1.15, 0]} />
      <meshStandardMaterial color="#ff2f42" emissive="#7c101d" emissiveIntensity={0.6} wireframe />
    </mesh>
  )
}

export default function HeroCanvas({ active }) {
  if (!active) return null
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={30} color="#39d5ff" />
        <Shard />
      </Canvas>
    </div>
  )
}
