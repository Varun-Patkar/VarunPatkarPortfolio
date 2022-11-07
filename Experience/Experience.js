import * as THREE from "three";

import Camera from "./Camera.js";
import Theme from "./Theme.js";
import Renderer from "./Renderer.js";
import Preloader from "./Preloader.js";
import World from "./World/World.js";

import Time from "./Utils/Time.js";
import assets from "./Utils/assets.js";
import Resources from "./Utils/Resources.js";
import Sizes from "./Utils/Sizes.js";

export default class Experience {
	static instance;
	constructor(canvas) {
		if (Experience.instance) {
			return Experience.instance;
		}
		Experience.instance = this;
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.resources = new Resources(assets);
		this.theme = new Theme();
		this.world = new World();
		this.preloader = new Preloader();
		this.time.on("update", () => {
			this.update();
		});
		this.sizes.on("resize", () => {
			this.resize();
		});
	}
	update() {
		this.camera.update();
		this.world.update();
		this.renderer.update();
	}
	resize() {
		this.camera.resize();
		this.world.resize();
		this.renderer.resize();
	}
}
