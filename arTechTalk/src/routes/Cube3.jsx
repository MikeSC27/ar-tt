import React from 'react'

const Cube3 = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
  
      const materials = [];
      const textures = [];
      const loader = new THREE.TextureLoader();
      for (let i = 0; i < 4; i++) {
        materials[i] = [];
        for (let j = 0; j < 6; j++) {
          textures[j] = loader.load(`path/to/image${j}.jpg`);
          materials[i][j] = new THREE.MeshBasicMaterial({ map: textures[j] });
        }
      }
  
      const cubes = [];
      for (let i = 0; i < 4; i++) {
        cubes[i] = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          materials[i]
        );
        cubes[i].position.x = (i - 1) * 1.5;
        scene.add(cubes[i]);
      }
  
      const largeCube = new THREE.Mesh(
        new THREE.BoxGeometry(6, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
      );
      scene.add(largeCube);
  
      const animate = () => {
        requestAnimationFrame(animate);
  
        for (let i = 0; i < 4; i++) {
          cubes[i].rotation.x += 0.01;
          cubes[i].rotation.y += 0.01;
        }
  
        renderer.render(scene, camera);
      };
      animate();
    }, []);
  
    return <div ref={containerRef} />;
}

export default Cube3