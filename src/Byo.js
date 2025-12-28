import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ChromePicker } from 'react-color';
import * as THREE from 'three';
import {useDispatch} from 'react-redux';
import { addCakeToCart} from './reducers/cartSlice';
import {
  Card,
  Heading,
  Label,
  Input,
  Select,
  ToppingButton,
  //ByoContainer,
} from './byo_styles.js';
import { /*Card, Button, CardContent,*/ ScrollArea } from './style.js';
//import {CakeStorePage} from './cakeStoragePage.js';

// Define flavor to color mapping
const flavorColors = {
  vanilla: '#f3e5ab',
  chocolate: '#7b3f00',
  'red velvet': '#b11226',
};

function CakeLayer({ position, color, shape, size, height }) {
  const radius = size / 2;
  let geometry;

  if (shape === 'round') {
    geometry = <cylinderGeometry args={[radius, radius, height, 64]} />;
  } else if (shape === 'square') {
    geometry = <boxGeometry args={[size, height, size]} />;
  } else if (shape === 'heart') {
    const shapeHeart = new THREE.Shape();
    shapeHeart.moveTo(0, 0);
    shapeHeart.bezierCurveTo(0, 2, -size / 2, 2, -size / 2, 0);
    shapeHeart.bezierCurveTo(-size / 2, -2, 0, -2, 0, -size);
    shapeHeart.bezierCurveTo(0, -2, size / 2, -2, size / 2, 0);
    shapeHeart.bezierCurveTo(size / 2, 2, 0, 2, 0, 0);
    const extrudeSettings = { depth: height, bevelEnabled: false };
    geometry = <extrudeGeometry args={[shapeHeart, extrudeSettings]} />;
  }

  return (
    <mesh
      position={position}
      rotation={shape === 'heart' ? [Math.PI / 2, 0, 0] : [0, 0, 0]}
    >
      {geometry}
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}

function Topping({ position, type }) {
  let geometry, material, meshProps = {};

  switch (type) {
    case 'cherries':
      geometry = <sphereGeometry args={[0.12 + Math.random() * 0.03, 32, 32]} />;
      material = (
        <meshStandardMaterial color="#c70039" roughness={0.3} metalness={0.2} />
      );
      break;

    case 'sprinkles':
      geometry = <boxGeometry args={[0.04, 0.015, 0.015]} />;
      material = (
        <meshStandardMaterial
          color={`hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`}
        />
      );
      meshProps.rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ];
      break;

    case 'flowers': {
      const petalCount = 5 + Math.floor(Math.random() * 4); // 5 to 8 petals
      const petalRadius = 0.05;
      const flowerColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 65%)`;

      const petals = Array.from({ length: petalCount }).map((_, i) => {
        const angle = (i / petalCount) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 0.07,
              0,
              Math.sin(angle) * 0.07,
            ]}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <sphereGeometry args={[petalRadius, 8, 8]} />
            <meshStandardMaterial color={flowerColor} />
          </mesh>
        );
      });

      const center = (
        <mesh>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      );

      return <group position={position}>{[...petals, center]}</group>;
    }

    default:
      geometry = <sphereGeometry args={[0.1, 16, 16]} />;
      material = <meshStandardMaterial color="white" />;
  }

  return (
    <mesh position={position} {...meshProps}>
      {geometry}
      {material}
    </mesh>
  );
}

const HeartCenterFlowers = () => {
  const flowerColors = ['#ff69b4', '#ffa500', '#8a2be2']; // pink, orange, violet

  return (
    <group position={[0, 1.2, 0]}>
      {flowerColors.map((color, i) => (
        <mesh
          key={color}
          position={[i * 0.4 - 0.4, 0, 0]}
        >
          <cylinderGeometry args={[0.1, 0.1, 0.05, 6]} />
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
};


function CakeDecorations({ layers, size, shape, trimColor, borderStyle }) {
  const height = 0.6;
  const decorations = [];

  for (let i = 0; i < layers; i++) {
    const y = i * height + height / 2;
    const radius = size / 2;
    const segmentCount = borderStyle === 'beaded' ? 32 : 16;

    for (let j = 0; j < segmentCount; j++) {
        const angle = (j / segmentCount) * 2 * Math.PI;
        const r = radius + 0.05;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      if (borderStyle === 'beaded') {
        decorations.push(
          <mesh key={`bead-${i}-${j}`} position={[x, y - height / 2, z]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
        );
      } else if (borderStyle === 'wavy') {
        const yOffset = 0.05 * Math.sin((j / segmentCount) * Math.PI * 8);
        decorations.push(
          <mesh
            key={`wave-${i}-${j}`}
            position={[x, y - height / 2 + yOffset, z]}
          >
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshStandardMaterial color={trimColor} />
          </mesh>
        );
      }
    }

    if (borderStyle === 'smooth') {
      decorations.push(
        <mesh
          key={`ring-${i}`}
          position={[0, y - height / 2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[radius + 0.04, 0.02, 16, 100]} />
          <meshStandardMaterial color={trimColor} />
        </mesh>
      );
    }
  }

  return <group>{decorations}</group>;
}

function CakeModel({
  layers,
  color,
  topColor,
  size,
  shape,
  toppings = [],
  trimColor,
  borderStyle,
  showDecorations,
}) {
  const height = 0.6;
  const topY = layers * height - height / 2;
  const radius = size / 2;
  
  const cakeRef = useRef();
  useFrame((state, delta) => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += delta * 0.25; // gentle rotation
    }
  });


  const generateToppingPositions = (count) => {
    const positions = [];

    for (let i = 0; i < count; i++) {
      let x = 0, z = 0;

      if (shape === 'round') {
        const angle = Math.random() * 2 * Math.PI;
        const r = Math.random() * (radius * 0.85);
        x = Math.cos(angle) * r;
        z = Math.sin(angle) * r;
      } else if (shape === 'square') {
        x = (Math.random() - 0.5) * size * 0.9;
        z = (Math.random() - 0.5) * size * 0.9;
      } else if (shape === 'heart') {
        let valid = false;
        while (!valid) {
          x = (Math.random() - 0.5) * size * 1.1;
          z = (Math.random() - 0.5) * size * 1.1;
          const nx = (2 * x) / size;
          const nz = (2 * z) / size;
          const h =
            Math.pow(nx * nx + nz * nz - 1, 3) - nx * nx * nz * nz * nz;
          if (h <= 0) valid = true;
        }
      }

      positions.push([x, topY + 0.1, z]);
    }

    return positions;
  };
  const generateCherryPositions = (count) => {
    const positions = [];
    const radius = size / 2;
    const y = topY + 0.1;
  
    for (let i = 0; i < count; i++) {
      const t = (i / count) * 2 * Math.PI;
  
      let x = 0, z = 0;
  
      if (shape === 'round') {
        x = Math.cos(t) * radius;
        z = Math.sin(t) * radius;
      } else if (shape === 'square') {
        // Equally space cherries along square perimeter
        const sideLen = size;
        const perimeter = 4 * sideLen;
        const d = (i / count) * perimeter;
  
        if (d < sideLen) {
          x = -sideLen / 2 + d;
          z = -sideLen / 2;
        } else if (d < 2 * sideLen) {
          x = sideLen / 2;
          z = -sideLen / 2 + (d - sideLen);
        } else if (d < 3 * sideLen) {
          x = sideLen / 2 - (d - 2 * sideLen);
          z = sideLen / 2;
        } else {
          x = -sideLen / 2;
          z = sideLen / 2 - (d - 3 * sideLen);
        }
      } else if (shape === 'heart') {
        // Use parametric heart curve
        const a = radius;
        const angle = t;
        const nx = 16 * Math.pow(Math.sin(angle), 3);
        const nz =
          13 * Math.cos(angle) -
          5 * Math.cos(2 * angle) -
          2 * Math.cos(3 * angle) -
          Math.cos(4 * angle);
        x = (nx / 16) * a;
        z = (nz / 16) * a * -1; // invert Z for 3D alignment
      }
  
      positions.push([x, y, z]);
    }
  
    return positions;
  };

  const generateFlowerPositions = (count, cherryPositions = []) => {
    const positions = [];
    const y = topY + 0.1;
    const padding = 0.2;
  
    for (let i = 0; i < count; i++) {
      const t = (i / count) * 2 * Math.PI;
      let x = 0, z = 0;
  
      if (shape === 'round') {
        x = Math.cos(t) * radius;
        z = Math.sin(t) * radius;
      } else if (shape === 'square') {
        const sideLen = size;
        const perimeter = 4 * sideLen;
        const d = (i / count) * perimeter;
  
        if (d < sideLen) {
          x = -sideLen / 2 + d;
          z = -sideLen / 2;
        } else if (d < 2 * sideLen) {
          x = sideLen / 2;
          z = -sideLen / 2 + (d - sideLen);
        } else if (d < 3 * sideLen) {
          x = sideLen / 2 - (d - 2 * sideLen);
          z = sideLen / 2;
        } else {
          x = -sideLen / 2;
          z = sideLen / 2 - (d - 3 * sideLen);
        }
      } else if (shape === 'heart') {
        const a = radius;
        const angle = t;
        const nx = 16 * Math.pow(Math.sin(angle), 3);
        const nz =
          13 * Math.cos(angle) -
          5 * Math.cos(2 * angle) -
          2 * Math.cos(3 * angle) -
          Math.cos(4 * angle);
        x = (nx / 16) * a;
        z = (nz / 16) * a * -1;
      }
  
      // avoid overlap with cherry positions
      const isTooClose = cherryPositions.some(([cx, , cz]) => {
        const dx = cx - x;
        const dz = cz - z;
        return dx * dx + dz * dz < padding * padding;
      });
  
      if (!isTooClose) {
        positions.push([x, y, z]);
      }
    }
  
    return positions;
  };
  
  

  const allToppings = [];

  let cherryPositions = [];
  if (toppings.includes('cherries')) {
    if (shape === 'heart') {
      cherryPositions = [
        [0, topY + 0.1, 0],
        [0.2, topY + 0.1, -0.2],
        [-0.2, topY + 0.1, -0.2],
      ];
    } else {
      cherryPositions = generateCherryPositions(12);
    }
  
    cherryPositions.forEach((pos, i) =>
      allToppings.push({
        key: `cherry-${i}`,
        type: 'cherries',
        position: pos,
      })
    );
  }
  if (toppings.includes('flowers')) {
    if (shape === 'heart') {
      // Render center flowers only; don't add distributed flower toppings
      // Handled below with <HeartCenterFlowers />
    } else {
      const flowerPositions = generateFlowerPositions(16, cherryPositions);
      flowerPositions.forEach((pos, i) =>
        allToppings.push({
          key: `flower-${i}`,
          type: 'flowers',
          position: pos,
        })
      );
    }
  }
  
    

if (toppings.includes('sprinkles')) {
  const sprinklePositions = generateToppingPositions(50); // keep random for sprinkles
  sprinklePositions.forEach((pos, i) =>
    allToppings.push({
      key: `sprinkle-${i}`,
      type: 'sprinkles',
      position: pos,
    })
  );
}


  return (
    <group ref={cakeRef} scale={[1.2, 1.2, 1.2]} position={[0, layers * 0.6 * 0.5, 0]}>
      {Array.from({ length: layers }).map((_, i) => (
        <CakeLayer
          key={i}
          position={[0, i * height, 0]}
          color={i === layers - 1 ? topColor : color}
          shape={shape}
          size={size}
          height={height}
        />
      ))}
      {allToppings.map(({ key, type, position }) => (
        <Topping key={key} type={type} position={position} />
      ))}
      {shape === 'heart' && toppings.includes('flowers') && <HeartCenterFlowers />}

{showDecorations && (
  <CakeDecorations
    layers={layers}
    size={size}
    shape={shape}
    trimColor={trimColor}
    borderStyle={shape !== 'heart' ? borderStyle:''}
  />
)}



    </group>
  );
}

export default function CakeCustomizerApp() {

  const dispatch = useDispatch()
  const [cake, setCake] = useState({
    shape: 'round',
    size: 8,
    flavor: 'vanilla',
    frosting: 'buttercream',
    color: flavorColors['vanilla'],
    topColor: '#ffffff',
    layers: 2,
    toppings: [],
    message: '',
    trimColor: '#ffffff',
    borderStyle: 'smooth',
    showDecorations: true,
  });
  const item = {
    name: "Custom Cake",
    id:20,
    price: 999,
    qty: 1,
  };

  const shapes = ['round', 'square', 'heart'];
  const flavors = ['vanilla', 'chocolate', 'red velvet'];
  const frostings = ['buttercream', 'fondant', 'whipped cream'];
  const toppings = ['sprinkles', 'cherries', 'flowers'];
  const [selectedColorPart, setSelectedColorPart] = useState('frosting'); // default selection


  const toggleTopping = (topping) => {
    setCake((prev) => {
      const toppings = new Set(prev.toppings);
      const isSelected = toppings.has(topping);
  
      if (isSelected) {
        toppings.delete(topping);
      } else {
        if (topping === 'cherries') toppings.delete('flowers');
        if (topping === 'flowers') toppings.delete('cherries');
        toppings.add(topping);
      }
  
      return {
        ...prev,
        toppings: Array.from(toppings),
      };
    });
  };
  

  const ColorPicker = ({ label, value, onChange }) => (
    <div style={{ marginTop: '1rem' }}>
      <Label>{label}</Label>
      <ChromePicker color={value} onChangeComplete={(c) => onChange(c.hex)} />
    </div>
  );
    
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cake Preview Canvas */}
        <div style={{ flex: '1', minHeight: '300px' }}>
          <Canvas shadows style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <OrbitControls />
            <Stage adjustCamera intensity={0.8}>
              <CakeModel {...cake} />
            </Stage>
          </Canvas>
        </div>
    
        {/* Configuration Panel */}
        {/* Configuration Panel */}

<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<ScrollArea className="h-[500px] pr-4" style={{ width: '100%', boxSizing: 'border-box' }}>
<Card>
  <Heading>Build Your Cake</Heading>

  {['shape', 'size', 'flavor', 'frosting', 'layers', 'message'].map((field) => (
    <div key={field} style={{ marginBottom: '1rem' }}>
      <Label>{field}:</Label>

      {field === 'size' || field === 'layers' ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            width: '100%',
          }}
        >
          <button
            type="button"
            onClick={() =>
              setCake((prev) => ({
                ...prev,
                [field]: Math.max(1, prev[field] - 1),
              }))
            }
            style={{
              padding: '0.25rem 0.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              backgroundColor: '#eee',
              border: '1px solid #ccc',
            }}
          >
            -
          </button>
          <span>{cake[field]}</span>
          <button
            type="button"
            onClick={() =>
              setCake((prev) => ({
                ...prev,
                [field]: prev[field] + 1,
              }))
            }
            style={{
              padding: '0.25rem 0.5rem',
              fontSize: '1rem',
              borderRadius: '4px',
              backgroundColor: '#eee',
              border: '1px solid #ccc',
            }}
          >
            +
          </button>
        </div>
      ) : field === 'message' ? (
        <Input
          type="text"
          value={cake.message}
          onChange={(e) => {setCake({ ...cake, message: e.target.value })}}
        />
      ) : (
        <Select
          value={cake[field]}
          onChange={(e) => {
            const value = e.target.value;
            if (field === 'flavor') {
              setCake((prev) => ({
                ...prev,
                flavor: value,
                color: flavorColors[value],
              }));
            } else {
              setCake({ ...cake, [field]: value });
            }
          }}
        >
          {(field === 'shape' ? shapes : field === 'flavor' ? flavors : frostings).map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
      )}
    </div>
  ))}

  <Label>Select Cake Part to Color:</Label>
  <Select
    value={selectedColorPart}
    onChange={(e) => setSelectedColorPart(e.target.value)}
  >
    <option value="frosting">Frosting</option>
    <option value="top">Top Layer</option>
    <option value="trim">Trim</option>
  </Select>

  <ColorPicker
    label="Choose Color:"
    value={
      selectedColorPart === 'frosting'
        ? cake.color
        : selectedColorPart === 'top'
        ? cake.topColor
        : cake.trimColor
    }
    onChange={(color) => {
      const newCake = { ...cake };
      if (selectedColorPart === 'frosting') newCake.color = color;
      else if (selectedColorPart === 'top') newCake.topColor = color;
      else newCake.trimColor = color;
      setCake(newCake);
    }}
  />

  <div style={{ marginTop: '1rem' }}>
    <Label>Toppings:</Label>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {toppings.map((t) => (
        <ToppingButton
          key={t}
          selected={cake.toppings.includes(t)}
          onClick={() => toggleTopping(t)}
          type="button"
        >
          {t}
        </ToppingButton>
      ))}
    </div>
  </div>

  <div style={{ marginTop: '1rem' }}>
    <Label>Show Decorations:</Label>
    <input
      type="checkbox"
      checked={cake.showDecorations}
      onChange={(e) => setCake({ ...cake, showDecorations: e.target.checked })}
    />
  </div>

  {cake.shape !== 'heart' && (
    <div style={{ marginTop: '1rem' }}>
      <Label>Border Style:</Label>
      <Select
        value={cake.borderStyle}
        onChange={(e) => setCake({ ...cake, borderStyle: e.target.value })}
      >
        <option value="smooth">Smooth</option>
        <option value="beaded">Beaded</option>
        <option value="wavy">Wavy</option>
      </Select>
    </div>
  )}

  <button
    style={{
      padding: '0.75rem 1.5rem',
      backgroundColor: '#6c63ff',
      color: 'white',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
    onClick={() => dispatch(addCakeToCart({ ...item, custom: cake }))}
  >
    Add to Cart
  </button>
</Card>

 
  </ScrollArea>
  </div>
</div>        
      </div>
    );
    
    
    
    
  
}

