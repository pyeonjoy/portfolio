// THREE.js import (CDN 사용)
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.182.0/build/three.module.js";

// Scene
const scene = new THREE.Scene();
//size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  // 화면 맞춤을 위해 sizes라는 상수 정의
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
//canvas가 흐릿하게 출력해주는 것을 막음
renderer.setClearColor(new THREE.Color("#21282a"), 1);
// 배경색을 어두은 gray로 설정
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 도넛형 도형
const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
const material = new THREE.PointsMaterial({
  size: 0.005,
  color: 0x87a7ca,
});
const sphere = new THREE.Points(geometry, material);
scene.add(sphere);

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
const star = loader.load("/star.png");
const particlesmaterial = new THREE.PointsMaterial({
  size: 0.005,
  map: star,
  transparent: true,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesmaterial);
scene.add(particlesMesh);

document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}

const clock = new THREE.Clock();

const animate = () => {
  window.requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();
  // 경과시간

  sphere.rotation.y = 0.5 * elapsedTime;
  //도넛형 도형의 y축을 회전
  particlesMesh.rotation.y = -1 * (elapsedTime * 0.1);
  //별들이 경과시간마다 음의 방향으로 이동

  if (mouseX > 0) {
    //사용자가 마우스를 움직이면 그에 맞춰 인터렉티브하게 움직임
    particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
    particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  }

  renderer.render(scene, camera);
};

animate();
