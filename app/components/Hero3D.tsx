"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x = state.clock.elapsedTime * 0.18;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <Sphere ref={mesh} args={[1.55, 64, 64]}>
        <MeshDistortMaterial
          color="#2563eb"
          roughness={0.18}
          metalness={0.55}
          distort={0.35}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function SmallSphere({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere position={position} args={[scale, 32, 32]}>
        <MeshDistortMaterial
          color="#ec4899"
          roughness={0.25}
          metalness={0.4}
          distort={0.2}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={2}
          color="#60a5fa"
        />

        <AnimatedSphere />

        <SmallSphere position={[2.2, 1.5, 0]} scale={0.38} />
        <SmallSphere position={[-2.2, -1.5, 0]} scale={0.28} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
