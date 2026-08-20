'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCyberSceneProps {
  compact?: boolean;
}

export function HeroCyberScene({ compact = false }: HeroCyberSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03254c, 0.045);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, compact ? 6.5 : 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- 1. OCEANIC LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x0077b6, 2.2);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 4.2, 14);
    cyanPointLight.position.set(2.5, 3.5, 2.5);
    scene.add(cyanPointLight);

    const skyPointLight = new THREE.PointLight(0x48cae4, 3.5, 12);
    skyPointLight.position.set(-3, -1, 2.5);
    scene.add(skyPointLight);

    const oceanGlowLight = new THREE.PointLight(0x0096c7, 2.8, 10);
    oceanGlowLight.position.set(0, 4, -2);
    scene.add(oceanGlowLight);

    // --- 2. 3D OCEAN SERVER BLADE RACK ---
    const serverGroup = new THREE.Group();

    // Rack Frame (Deep Ocean Metallic Navy)
    const rackGeometry = new THREE.BoxGeometry(2.2, 3.5, 1.2);
    const rackMaterial = new THREE.MeshStandardMaterial({
      color: 0x053359,
      metalness: 0.85,
      roughness: 0.2,
    });
    const rackMesh = new THREE.Mesh(rackGeometry, rackMaterial);
    rackMesh.castShadow = true;
    rackMesh.receiveShadow = true;
    serverGroup.add(rackMesh);

    // Glass Side Panel (Oceanic Cyan Translucent)
    const glassSide = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 3.4, 1.15),
      new THREE.MeshPhysicalMaterial({
        color: 0x48cae4,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        metalness: 0.15,
        transmission: 0.65,
        ior: 1.5,
      })
    );
    glassSide.position.set(1.12, 0, 0);
    serverGroup.add(glassSide);

    // Server Blades (7 Units)
    const bladeLEDs: THREE.Mesh[] = [];
    const bladeGeometry = new THREE.BoxGeometry(2.0, 0.36, 1.1);
    const bladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x084777,
      metalness: 0.75,
      roughness: 0.25,
    });

    const ledCyanMaterial = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const ledFoamMaterial = new THREE.MeshBasicMaterial({ color: 0xcaf0f8 });
    const ledSkyMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < 7; i++) {
      const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
      blade.position.set(0, 1.35 - i * 0.45, 0.04);
      blade.castShadow = true;
      serverGroup.add(blade);

      // Front Grill Lines
      const grill = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.22, 0.02),
        new THREE.MeshStandardMaterial({ color: 0x031e36, metalness: 0.9, roughness: 0.4 })
      );
      grill.position.set(-0.2, 1.35 - i * 0.45, 0.6);
      serverGroup.add(grill);

      // LED Indicators (3 per blade)
      for (let j = 0; j < 3; j++) {
        const mat = j === 0 ? ledCyanMaterial : j === 1 ? ledFoamMaterial : ledSkyMaterial;
        const led = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), mat.clone());
        led.position.set(0.65 + j * 0.1, 1.35 - i * 0.45, 0.61);
        serverGroup.add(led);
        bladeLEDs.push(led);
      }
    }

    // Pedestal Base with Glowing Ocean Rings
    const baseCylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.8, 0.25, 36),
      new THREE.MeshStandardMaterial({ color: 0x042848, metalness: 0.9, roughness: 0.2 })
    );
    baseCylinder.position.set(0, -1.85, 0);
    serverGroup.add(baseCylinder);

    const baseRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.7, 0.03, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    );
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.set(0, -1.82, 0);
    serverGroup.add(baseRing);

    rootGroup.add(serverGroup);

    // --- 3. HOLOGRAPHIC OCEAN DATA RINGS & QUANTUM CUBES ---
    const ringGroup = new THREE.Group();
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.018, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.7 })
    );
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.9, 0.015, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0x90e0ef, transparent: true, opacity: 0.55 })
    );
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    ringGroup.add(ring2);

    rootGroup.add(ringGroup);

    // Floating Ocean Quantum Cubes
    const cubeCount = compact ? 5 : 8;
    const floatingCubes: { mesh: THREE.Mesh; speedX: number; speedY: number; offset: number }[] = [];
    const cubeGeom = new THREE.BoxGeometry(0.28, 0.28, 0.28);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8,
      emissive: 0x0077b6,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.88,
      metalness: 0.2,
      roughness: 0.1,
    });

    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(cubeGeom, cubeMat.clone());
      const angle = (i / cubeCount) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 0.8;
      cube.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2.5,
        Math.sin(angle) * radius
      );
      rootGroup.add(cube);
      floatingCubes.push({
        mesh: cube,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // --- 4. OCEAN PARTICLE CLOUD FIELD ---
    const particleCount = compact ? 280 : 550;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x48cae4,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // --- 5. INTERACTION & ANIMATION LOOP ---
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.25;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    let animationFrameId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / root parallax
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      rootGroup.rotation.y = currentRotationY + Math.sin(elapsedTime * 0.3) * 0.08;
      rootGroup.rotation.x = currentRotationX + Math.cos(elapsedTime * 0.2) * 0.04;

      // Rotate holographic rings
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      ring2.rotation.y += 0.004;

      // Animate floating cubes
      floatingCubes.forEach((cube) => {
        cube.mesh.rotation.x += 0.015;
        cube.mesh.rotation.y += 0.02;
        cube.mesh.position.y += Math.sin(elapsedTime * 1.5 + cube.offset) * 0.004;
      });

      // Animate LED pulsing randomly
      bladeLEDs.forEach((led, index) => {
        if ((Math.floor(elapsedTime * 10) + index) % 6 === 0) {
          (led.material as THREE.MeshBasicMaterial).color.setHex(0xffffff);
        } else {
          (led.material as THREE.MeshBasicMaterial).color.setHex(
            index % 3 === 0 ? 0x00f0ff : index % 3 === 1 ? 0xcaf0f8 : 0x48cae4
          );
        }
      });

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [compact]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none"
      style={{ minHeight: compact ? '360px' : '480px' }}
      aria-label="STACloud 3D Ocean Server Scene"
    />
  );
}
