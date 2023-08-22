import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef;
  private isMouseDown = false;
  private previousMouseX = 0;
  private previousMouseY = 0;
  private cameraDistance = 10;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private keyboard!: THREE.Group;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initScene();
    this.addResizeListener();
    this.addMouseListeners();
    this.loadKeyboardModel(() => {
      this.animate();
    });
  }

  initScene() {
    const aspect = window.innerWidth / window.innerHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(2, aspect, 0.1, 1000);
    this.camera.position.set(0, 5, 5);
    this.camera.lookAt(0, 0, 0.03);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 1, 0);
    this.scene.add(ambientLight, directionalLight);
  }

  loadKeyboardModel(callback: () => void) {
    const loader = new GLTFLoader();
    loader.load('assets/three-js/keyboard.glb', (gltf) => {
      this.keyboard = gltf.scene;
      this.scene.add(this.keyboard);
      callback();
    });
  }


  addMouseListeners() {
    this.canvasRef.nativeElement.addEventListener(
      'mousedown',
      this.onMouseDown.bind(this)
    );
    this.canvasRef.nativeElement.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this)
    );
    this.canvasRef.nativeElement.addEventListener(
      'mouseup',
      this.onMouseUp.bind(this)
    );
  }

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.previousMouseX = event.clientX;
    this.previousMouseY = event.clientY;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      const deltaX = event.clientX - this.previousMouseX;
      const deltaY = event.clientY - this.previousMouseY;
      if (this.keyboard) {
        this.keyboard.rotation.y += deltaX * 0.005;
        this.keyboard.rotation.x += deltaY * 0.005;
      }
      this.previousMouseX = event.clientX;
      this.previousMouseY = event.clientY;
    }
  }

  onMouseUp() {
    this.isMouseDown = false;
  }

  addResizeListener() {
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      this.renderer.setSize(newWidth, newHeight);
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      if (this.keyboard) {
        this.keyboard.position.set(0, 0, 0);
      }
    });
  }
  animate() {
    this.ngZone.runOutsideAngular(() => {
      let rotationDirection = 1;
      const rotationSpeed = 0.001;
      const animateFn = () => {
        requestAnimationFrame(animateFn);

        if (this.keyboard) {
          this.keyboard.rotation.y += rotationDirection * rotationSpeed;
        }
        if (Math.abs(this.keyboard.rotation.y) >= Math.PI / 4) {
          rotationDirection *= -1;
        }

        this.renderer.render(this.scene, this.camera);
      };
      animateFn();
    });
  }
}
