import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
	constructor() {
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.createPerspectiveCamera();
		this.createTrackingCamera();
		this.setOrbitControls();
	}
	createPerspectiveCamera() {
		this.perspectiveCamera = new THREE.PerspectiveCamera(
			35,
			this.sizes.aspect,
			0.1,
			1000
		);
		this.scene.add(this.perspectiveCamera);
		this.perspectiveCamera.position.set(0, 10, 13.5);
		this.perspectiveCamera.rotation.set(-0.5, 0, 0);
		const size = 20;
		const divisions = 20;

		// const gridHelper = new THREE.GridHelper(size, divisions);
		// this.scene.add(gridHelper);
		// const axesHelper = new THREE.AxesHelper(5);
		// this.scene.add(axesHelper);
	}
	createTrackingCamera() {
		this.frustrum = 5;
		this.trackingCamera = new THREE.PerspectiveCamera(
			35,
			this.sizes.aspect,
			0.1,
			100
		);
		this.scene.add(this.trackingCamera);
		this.trackingCamera.position.set(0, 2.35, 4.7);
		this.trackingCamera.rotation.set(-0.32, 0, 0);
		// this.helper = new THREE.CameraHelper(this.trackingCamera);
		// this.scene.add(this.helper);
	}
	setOrbitControls() {
		this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
		this.controls.enableDamping = true;
		this.controls.enableZoom = false;
	}
	resize() {
		//Updating Perspective Camera on Resize
		this.perspectiveCamera.aspect = this.sizes.aspect;
		this.perspectiveCamera.updateProjectionMatrix();

		//Updating Tracking Camera on Resize
		this.trackingCamera.aspect = this.sizes.aspect;
		this.trackingCamera.updateProjectionMatrix();
	}
	update() {
		this.controls.update();
		// this.helper.matrixWorldNeedsUpdate = true;
		// this.helper.update();
		// this.helper.position.copy(this.trackingCamera.position);
		// this.helper.rotation.copy(this.trackingCamera.rotation);
	}
}
