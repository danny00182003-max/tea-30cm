import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Shard() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (!ref.current) return
    const step = Math.min(dt, 0.05)
    ref.current.rotation.y += step * 0.35
    ref.current.rotation.x += step * 0.12
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[1.15, 0]} />
      <meshStandardMaterial color="#ff2f42" emissive="#7c101d" emissiveIntensity={0.6} wireframe />
    </mesh>
  )
}

/**
 * 八面體 signature 元件（ADR-001/002/005：保留 R3F 互動元件）。
 * 這個模組會把 three + @react-three/fiber 一起拉進來，因此獨立成檔，
 * 由 HeroCanvas 以 React.lazy 動態載入 —— 不需要 3D 的裝置不會下載這包。
 */
export default function HeroShard({ running }) {
  return (
    <Canvas frameloop={running ? 'always' : 'never'} camera={{ position: [0, 0, 3.2], fov: 50 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#39d5ff" />
      <Shard />
    </Canvas>
  )
}
