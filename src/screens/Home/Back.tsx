import React, { useEffect, useRef } from "react";
// @ts-ignore
import * as THREE from "three";

const Back: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    //size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    //camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 2;
    scene.add(camera);
    //renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#21282a"), 1);
    mountRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 파티클 시스템
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const loader = new THREE.TextureLoader();
    const star = loader.load("/img/star.png");
    const particlesmaterial = new THREE.PointsMaterial({
      size: 0.005,
      map: star,
      transparent: true,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesmaterial
    );
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;

    function animateParticles(event: MouseEvent) {
      mouseY = event.clientY;
      mouseX = event.clientX;
    }

    document.addEventListener("mousemove", animateParticles);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // 파티클 회전 애니메이션
      particlesMesh.rotation.y = -1 * (elapsedTime * 0.1);

      // 마우스 인터랙션
      if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 정리 함수
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", animateParticles);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesmaterial.dispose();
      if (star) star.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        margin: 0,
        width: "100%",
        height: "100vh",
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Back;
