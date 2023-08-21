import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  // @ViewChild('magmaContainer', { static: true }) magmaContainer!: ElementRef;

  // private scene!: THREE.Scene;
  // private camera!: THREE.PerspectiveCamera;
  // private renderer!: THREE.WebGLRenderer;
  // private magmaGeometry!: THREE.PlaneGeometry;
  // private magmaMaterial!: THREE.ShaderMaterial;
  // private magmaMesh!: THREE.Mesh;

  // constructor(private ngZone: NgZone) {}

  // ngOnInit() {
  //   this.ngZone.runOutsideAngular(() => this.initializeScene());
  // }

  // ngOnDestroy() {
  //   this.ngZone.runOutsideAngular(() => this.disposeScene());
  // }

  // private initializeScene() {
  //   // Inicialización de la escena, la cámara y el renderizador
  //   this.scene = new THREE.Scene();
  //   this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   this.camera.position.z = 5;

  //   this.renderer = new THREE.WebGLRenderer();
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   this.magmaContainer.nativeElement.appendChild(this.renderer.domElement);

  //   // Creación del material shader para el magma
  //   this.magmaMaterial = new THREE.ShaderMaterial({
  //     vertexShader: `
  //       // Tu vertex shader aquí
  //     `,
  //     fragmentShader: `
  //       // Tu fragment shader aquí para simular el efecto de magma
  //     `
  //   });

  //   // Creación de la geometría del plano
  //   this.magmaGeometry = new THREE.PlaneGeometry(10, 10);

  //   // Creación del mesh del magma
  //   this.magmaMesh = new THREE.Mesh(this.magmaGeometry, this.magmaMaterial);
  //   this.scene.add(this.magmaMesh);

  //   // Bucle de renderizado
  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     this.magmaMesh.rotation.x += 0.005;
  //     this.magmaMesh.rotation.y += 0.005;
  //     this.renderer.render(this.scene, this.camera);
  //   };

  //   animate();
  // }

  // private disposeScene() {
  //   // Limpiar recursos al destruir el componente
  //   this.renderer.dispose();
  // }
}
