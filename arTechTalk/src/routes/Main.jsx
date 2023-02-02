import { useEffect, useRef } from "react";
import * as THREE from "three";
import DuckImg from "../assets/duck.png";
import LALogo from "../assets/lalogo.png";
import Golfjan from "../assets/golfjan.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Stats from "three/examples/jsm/libs/stats.module";

const Main = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = -15;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 10, 5);
    scene.add(spotLight);

    // add background image as a plane Refactor this 
    const texture = new THREE.TextureLoader().load(Golfjan);
    const backgroundGeometry = new THREE.PlaneGeometry(15, 15);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const backgroundMesh = new THREE.Mesh(
      backgroundGeometry,
      backgroundMaterial
    );
    backgroundMesh.position.z = -5;
    scene.add(backgroundMesh);
    

    // add four independent cubes
    for (let i = 0; i < 4; i++) {
      const boxGeometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);
      const material = new THREE.MeshBasicMaterial();

      // assign different textures to each cube
      switch (i) {
        case 0:
          material.map = new THREE.TextureLoader().load(DuckImg);
          break;
        case 1:
          material.map = new THREE.TextureLoader().load(LALogo);
          break;
        case 2:
          material.map = new THREE.TextureLoader().load(DuckImg);
          break;
        case 3:
          material.map = new THREE.TextureLoader().load(LALogo);
          break;
        // case 4:
        //   material.map = new THREE.TextureLoader().load(LALogo);
        //   break;
        // case 5:
        //   material.map = new THREE.TextureLoader().load(DuckImg);
        //   break;
        // case 6:
        //   material.map = new THREE.TextureLoader().load(LALogo);
        //   break;
      }
      

      const boxMesh = new THREE.Mesh(boxGeometry, material);
      boxMesh.position.x = i;
      scene.add(boxMesh);

      // animate each cube independently
      const animate = () => {
        requestAnimationFrame(animate);
        boxMesh.rotation.x += 0.01;
        boxMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }

    // added controls for camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
  }, []);

  return <div className="Cube" />;
}

export default Main