import React, { useEffect } from 'react';
import { World } from './styled';
import * as THREE from 'three';
import { Colors } from '../../assets/colors/threejs.color';

function ThreeJS() {
  const Light = () => {
    const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
    const shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);

    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;
    return { hemisphereLight, shadowLight };
  };

  const Sea = () => {
    const sea = new THREE.CylinderGeometry(600, 600, 800, 64, 10);

    sea.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

    const seaMat = new THREE.MeshPhongMaterial({
      color: Colors.clay,
      transparent: true,
      opacity: 1,
    });

    sea.mesh = new THREE.Mesh(sea, seaMat);
    sea.mesh.receiveShadow = true;
    sea.mesh.position.y = -600;
    return sea;
  };

  const Cloud = () => {
    const cloud = new THREE.Object3D();
    const cloudGeom = new THREE.BoxGeometry(20, 20, 20);
    const cloudMat = new THREE.MeshPhongMaterial({
      color: Colors.white,
    });

    const nBlocs = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < nBlocs; i++) {
      const m = new THREE.Mesh(cloudGeom, cloudMat);
      m.position.x = i * 15;
      m.position.y = Math.random() * 10;
      m.position.z = Math.random() * 10;
      m.rotation.z = Math.random() * Math.PI * 2;
      m.rotation.y = Math.random() * Math.PI * 2;

      const s = 0.1 + Math.random() * 0.9;
      m.scale.set(s, s, s);
      m.castShadow = true;
      m.receiveShadow = true;
      cloud.add(m);
    }
    return cloud;
  };

  const AirPlane = () => {
    const planeMesh = new THREE.Object3D();

    // Tạo cabin
    const geomCockpit = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1);
    const matCockpit = new THREE.MeshPhongMaterial({ color: Colors.green, flatShading: true });
    const cockpit = new THREE.Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    planeMesh.add(cockpit);

    // Tạo động cơ
    const geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
    const matEngine = new THREE.MeshPhongMaterial({ color: Colors.white, flatShading: true });
    const engine = new THREE.Mesh(geomEngine, matEngine);
    engine.position.x = 40;
    engine.castShadow = true;
    engine.receiveShadow = true;
    planeMesh.add(engine);

    // Tạo đuôi
    const geomTailPlane = new THREE.BoxGeometry(35, 20, 5, 1, 1, 1);
    const matTailPlane = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
    const tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(-35, 25, 0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    planeMesh.add(tailPlane);

    // Tạo cánh
    const geomSideWing = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1);
    const matSideWing = new THREE.MeshPhongMaterial({ color: Colors.red, flatShading: true });
    const sideWing = new THREE.Mesh(geomSideWing, matSideWing);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;
    planeMesh.add(sideWing);

    // phần quạt
    const geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
    const matPropeller = new THREE.MeshPhongMaterial({ color: Colors.brown, flatShading: true });
    const fan = new THREE.Mesh(geomPropeller, matPropeller);
    fan.castShadow = true;
    fan.receiveShadow = true;

    // cánh quạt
    const geomBlade = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1);
    const matBlade = new THREE.MeshPhongMaterial({ color: Colors.brownDark, flatShading: true });

    const blade = new THREE.Mesh(geomBlade, matBlade);
    blade.position.set(8, 0, 0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    fan.add(blade);
    fan.position.set(50, 0, 0);
    fan.name = 'Cánh quạt';
    planeMesh.add(fan);

    return planeMesh;
  };

  const Sky = () => {
    const skyMes = new THREE.Object3D();

    const nClouds = 20;
    const stepAngle = (Math.PI * 2) / nClouds;

    for (let i = 0; i < nClouds; i++) {
      const a = stepAngle * i;
      const h = 750 + Math.random() * 200;
      const cloud = Cloud();

      cloud.position.y = Math.sin(a) * h;
      cloud.position.x = Math.cos(a) * h;

      cloud.rotation.z = a + Math.PI / 2;

      cloud.position.z = -400 - Math.random() * 400;

      var s = 1 + Math.random() * 2;
      cloud.scale.set(s, s, s);
      skyMes.add(cloud);
    }
    return skyMes;
  };

  const Camera = (width, height) => {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearCam = 1;
    const farCam = 10000;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearCam, farCam);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 200;
    return camera;
  };

  const Chimney = () => {
    const chimney = new THREE.Object3D();

    const geomChimney = new THREE.BoxGeometry(50, 1350, 50, 1, 1, 1);
    const matChimney = new THREE.MeshBasicMaterial({ color: Colors.brown });
    console.log(matChimney);
    const chimneyMesh = new THREE.Mesh(geomChimney, matChimney);
    chimney.castShadow = true;
    chimney.receiveShadow = true;
    chimney.add(chimneyMesh);

    return chimney;
  };

  useEffect(() => {
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;
    const scene = new THREE.Scene();
    const camera = Camera(WIDTH, HEIGHT);

    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    const container = document.getElementById('world');
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    window.addEventListener(
      'resize',
      () => {
        const HEIGHT = window.innerHeight;
        const WIDTH = window.innerWidth;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
      },
      false
    );

    //light
    const light = Light();

    scene.add(light.hemisphereLight);
    scene.add(light.shadowLight);

    //sea
    const sea = Sea();
    scene.add(sea.mesh);

    //sky
    const sky = Sky();
    sky.position.y = -600;
    scene.add(sky);

    //plane
    const plane = AirPlane();
    plane.scale.set(0.25, 0.25, 0.25);
    plane.position.y = 150;
    plane.position.x = -80;
    scene.add(plane);

    //chimney
    const chimney = Chimney();
    chimney.position.y = -600;
    chimney.position.z = -20;
    scene.add(chimney);

    let mouseClick = false;
    document.addEventListener(
      'click',
      () => {
        const newHeight = plane.position.y + 50;

        if (!(newHeight >= 250)) {
          mouseClick = true;
          const jump = setInterval(() => {
            plane.position.y += 0.5;
            if (plane.position.y >= newHeight) {
              clearInterval(jump);
              mouseClick = false;
            }
          }, 1);
        }
      },
      false
    );

    let rotateplane = true;
    const loop = () => {
      plane.children[4].rotation.x += 0.3;
      if (rotateplane) {
        plane.rotation.x += 0.005;
        if (plane.rotation.x >= 0.5) rotateplane = false;
      } else {
        plane.rotation.x -= 0.005;
        if (plane.rotation.x <= -0.5) rotateplane = true;
      }
      sea.mesh.rotation.z += 0.005;
      sky.rotation.z += 0.01;
      chimney.rotation.z += 0.005;

      //gravity for plane
      if (!mouseClick)
        if (plane.position.y > 10) {
          plane.position.y -= 1;
        }

      // render the scene
      renderer.render(scene, camera);

      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return <World id="world"></World>;
}

export default ThreeJS;
