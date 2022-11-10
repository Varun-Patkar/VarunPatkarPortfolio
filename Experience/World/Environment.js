import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Environment {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.theme = "light";
		this.setLight();
	}

	setLight() {
		this.light = new THREE.DirectionalLight("#FFFFFF", 0.5);
		this.light.castShadow = true;
		this.light.shadow.camera.far = 20;
		this.light.shadow.mapSize.set(2048, 2048);
		this.light.shadow.normalBias = 0.05;
		this.light.position.set(0, 3, 5);
		this.scene.add(this.light);
		this.ambientLight = new THREE.AmbientLight("#FFFFFF", 0.4);
		this.scene.add(this.ambientLight);
	}

	switchTheme(theme) {
		this.lamp = this.experience.world?.room.lamp;
		this.theme = theme;
		if (this.lamp) {
			if (theme === "dark") {
				GSAP.to(this.lamp, {
					intensity: 1,
					delay: 0.5,
					ease: "elastic.out(2, 0.2)",
					duration: 1.5,
				});
				GSAP.to(this.light.color, {
					r: 0.32,
					g: 0.3,
					b: 0.44,
				});
				GSAP.to(this.ambientLight.color, {
					r: 0.32,
					g: 0.3,
					b: 0.44,
				});
			} else {
				GSAP.to(this.lamp, { intensity: 0 });
				GSAP.to(this.light.color, {
					r: 1,
					g: 1,
					b: 1,
				});
				GSAP.to(this.ambientLight.color, {
					r: 1,
					g: 1,
					b: 1,
				});
			}
		}
	}

	resize() {}

	update() {}
}
