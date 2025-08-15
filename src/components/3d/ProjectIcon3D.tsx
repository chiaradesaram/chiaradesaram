import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Suspense } from 'react';

interface ProjectIcon3DProps {
  type: 'food' | 'animal' | 'finance' | 'language' | 'music';
  className?: string;
}

const FoodIcon = () => (
  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
    <mesh>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.1} />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
      <meshStandardMaterial color="#059669" roughness={0.3} />
    </mesh>
  </Float>
);

const AnimalIcon = () => (
  <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
    <mesh>
      <boxGeometry args={[1.2, 0.8, 0.6]} />
      <meshStandardMaterial color="#14b8a6" roughness={0.1} metalness={0.2} />
    </mesh>
    <mesh position={[0.4, 0.6, 0.2]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#0d9488" />
    </mesh>
    <mesh position={[-0.4, 0.6, 0.2]}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#0d9488" />
    </mesh>
  </Float>
);

const FinanceIcon = () => (
  <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.2}>
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
      <meshStandardMaterial color="#0891b2" roughness={0.1} metalness={0.3} />
    </mesh>
    <mesh position={[0, 0.4, 0]} rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
      <meshStandardMaterial color="#0e7490" roughness={0.1} metalness={0.3} />
    </mesh>
    <mesh position={[0, 0.7, 0]} rotation={[0, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
      <meshStandardMaterial color="#0c4a6e" roughness={0.1} metalness={0.3} />
    </mesh>
  </Float>
);

const LanguageIcon = () => (
  <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.25}>
    <mesh>
      <boxGeometry args={[1.4, 1, 0.2]} />
      <meshStandardMaterial color="#ea580c" roughness={0.2} metalness={0.1} />
    </mesh>
    <mesh position={[0, 0, 0.15]}>
      <planeGeometry args={[1.2, 0.8]} />
      <meshStandardMaterial color="#dc2626" />
    </mesh>
    <mesh position={[0, 0.2, 0.16]}>
      <planeGeometry args={[0.8, 0.1]} />
      <meshStandardMaterial color="#fbbf24" />
    </mesh>
    <mesh position={[0, 0, 0.16]}>
      <planeGeometry args={[0.8, 0.1]} />
      <meshStandardMaterial color="#fbbf24" />
    </mesh>
  </Float>
);

const MusicIcon = () => (
  <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.2}>
    <mesh>
      <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
      <meshStandardMaterial color="#7c3aed" roughness={0.2} metalness={0.2} />
    </mesh>
    <mesh position={[0, 0.8, 0]}>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshStandardMaterial color="#6d28d9" roughness={0.1} metalness={0.3} />
    </mesh>
    <mesh position={[0, -0.8, 0]}>
      <cylinderGeometry args={[0.5, 0.3, 0.4, 16]} />
      <meshStandardMaterial color="#5b21b6" roughness={0.2} metalness={0.2} />
    </mesh>
  </Float>
);

const ProjectIcon3D = ({ type, className = "" }: ProjectIcon3DProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'food':
        return <FoodIcon />;
      case 'animal':
        return <AnimalIcon />;
      case 'finance':
        return <FinanceIcon />;
      case 'language':
        return <LanguageIcon />;
      case 'music':
        return <MusicIcon />;
      default:
        return <FoodIcon />;
    }
  };

  return (
    <div className={`w-16 h-16 ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <pointLight position={[-2, -2, -2]} intensity={0.5} />
          {renderIcon()}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProjectIcon3D;