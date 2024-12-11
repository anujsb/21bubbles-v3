// 'use client'

// import { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Sphere, MeshDistortMaterial } from '@react-three/drei'
// import * as THREE from 'three'

// function AnimatedSphere() {
//   const meshRef = useRef<THREE.Mesh>(null)

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
//     }
//   })

//   return (
//     <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
//       <MeshDistortMaterial
//         color="#4B0082"
//         attach="material"
//         distort={0.5}
//         speed={2}
//         roughness={0.5}
//       />
//     </Sphere>
//   )
// }

// export function ThreeDBackground() {
//   return (
//     <div className="fixed inset-0 z-0">
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <AnimatedSphere />
//       </Canvas>
//     </div>
//   )
// }

