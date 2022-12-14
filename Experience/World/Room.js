import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Room {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.room = this.resources.items.room;
		this.actualRoom = this.room.scene;
		this.roomChildren = {};

		this.lerp = {
			current: 0,
			target: 0,
			ease: 0.1,
		};

		this.setModel();
		this.onMouseMove();
	}

	setModel() {
		this.actualRoom.children.forEach((child) => {
			child.castShadow = true;
			child.receiveShadow = true;
			if (child instanceof THREE.Group) {
				child.children.forEach((grpChild) => {
					grpChild.castShadow = true;
					grpChild.receiveShadow = true;
				});
			}
			if (child.name === "PCMonitor") {
				child.children[1].material = new THREE.MeshBasicMaterial({
					map: this.resources.items.screen,
				});
			}
			child.scale.set(0, 0, 0);
			if (child.name === "Preloader") {
				// child.scale.set(1, 1, 1);
				child.position.set(0, 9, 0);
			}
			this.roomChildren[child.name.toLowerCase()] = child;
		});

		this.lamp = new THREE.PointLight(0xffffff, 0, 1);
		this.lamp.position.set(-4.862711429595947, 13, -4.4);
		this.roomChildren["lamplight"] = this.lamp;
		this.actualRoom.add(this.lamp);

		this.scene.add(this.actualRoom);
		this.actualRoom.scale.set(0.11, 0.11, 0.11);
		this.actualRoom.position.x = -0.1;
	}

	onMouseMove() {
		window.addEventListener("mousemove", (e) => {
			this.lerp.target = ((e.clientX / window.innerWidth) * 2 - 1) / 5;
		});
	}

	resize() {}

	update() {
		this.lerp.current = GSAP.utils.interpolate(
			this.lerp.current,
			this.lerp.target,
			this.lerp.ease
		);
		this.actualRoom.rotation.y = this.lerp.current;
		//Reset rotation if on phone
		if (window.screen.width < 969) {
			this.actualRoom.rotation.y = 0;
		}
	}
}
