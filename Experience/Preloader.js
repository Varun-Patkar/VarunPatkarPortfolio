import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";

export default class Preloader extends EventEmitter {
	constructor() {
		super();

		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.camera = this.experience.camera;
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.world = this.experience.world;
		this.device = this.sizes.device;

		this.sizes.on("switchDevice", (device) => {
			this.device = device;
		});

		this.world.on("worldReady", () => {
			this.setAssets();
			this.playIntro();
		});
	}
	setAssets() {
		this.room = this.experience.world.room.actualRoom;
		this.roomChildren = this.experience.world.room.roomChildren;
	}
	firstIntro() {
		return new Promise((resolve) => {
			this.roomChildren.preloader.position.y = 0;
			this.timeline = new GSAP.timeline();
			if (this.device === "desktop") {
				this.camera.trackingCamera.position.y = 1.5;
				this.timeline
					.to(this.roomChildren.preloader.scale, {
						x: 0.5,
						y: 0.5,
						z: 0.5,
						ease: "back-out(2.5)",
						duration: 0.7,
					})
					.to(this.room.position, {
						x: -1,
						ease: "power1-out",
						duration: 0.7,
						onComplete: resolve,
					});
			} else {
				this.camera.trackingCamera.position.x = -0.1;
				this.camera.trackingCamera.position.z = 10;
				this.timeline
					.to(this.roomChildren.preloader.scale, {
						x: 0.5,
						y: 0.5,
						z: 0.5,
						ease: "back-out(2.5)",
						duration: 0.7,
					})
					.to(this.room.position, {
						z: -1,
						ease: "power1-out",
						duration: 0.7,
						onComplete: resolve,
					});
			}
		});
	}
	secondIntro() {
		return new Promise((resolve) => {
			this.secondTimeline = new GSAP.timeline();
			if (this.device === "desktop") {
				this.camera.trackingCamera.position.y = 1.5;
				this.secondTimeline
					.to(this.room.position, {
						x: -0.1,
						y: 0,
						z: 0,
						ease: "power1-out",
						duration: 0.7,
					})
					.to(this.roomChildren.preloader.rotation, {
						y: 2 * Math.PI,
					})
					.to(
						this.roomChildren.preloader.scale,
						{
							x: 10,
							y: 10,
							z: 10,
						},
						"same"
					)
					.to(
						this.camera.trackingCamera.position,
						{
							x: 0,
							y: 2.35,
							z: 4.7,
						},
						"same"
					)
					.to(this.roomChildren.floor.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 0.1,
					})
					.to(this.roomChildren.preloader.scale, {
						x: 0,
						y: 0,
						z: 0,
						duration: 1,
					})
					//scale up objects
					.to(this.roomChildren.lamplight.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.01,
					})
					.to(this.roomChildren.table.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.deskitems.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.pcmonitor.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.shelves.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						onComplete: resolve,
						duration: 0.5,
					})
					.to(this.roomChildren.clock.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						onComplete: resolve,
						duration: 0.5,
					})
					.to(
						this.roomChildren.flooritems.scale,
						{
							x: 1,
							y: 1,
							z: 1,
							duration: 1,
							ease: "power2.out",
							duration: 0.5,
						},
						"same1"
					)
					.to(
						this.roomChildren.chair.scale,
						{
							x: 1,
							y: 1,
							z: 1,
							duration: 1,
							ease: "power2.out",
							onComplete: resolve,
						},
						"same1"
					)
					.to(
						this.roomChildren.chair.rotation,
						{
							y: 4 * Math.PI - 1.5707963267948966,
							ease: "back.out(0.5)",
							onComplete: resolve,
							duration: 2,
						},
						"same1"
					);
			} else {
				this.secondTimeline
					.to(this.room.position, {
						x: -0.1,
						y: 0,
						z: 0,
						ease: "power1-out",
						duration: 0.7,
					})
					.to(this.roomChildren.preloader.rotation, {
						y: 2 * Math.PI,
					})
					.to(
						this.roomChildren.preloader.scale,
						{
							x: 20,
							y: 20,
							z: 20,
						},
						"same"
					)
					.to(
						this.camera.trackingCamera.position,
						{
							x: 0.25,
							y: 3.5,
							z: 9,
						},
						"same"
					)
					.to(this.roomChildren.floor.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 0.1,
					})
					.to(this.roomChildren.preloader.scale, {
						x: 0,
						y: 0,
						z: 0,
						duration: 1,
					})
					//scale up objects
					.to(this.roomChildren.lamplight.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.01,
					})
					.to(this.roomChildren.table.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.deskitems.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.pcmonitor.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						duration: 0.5,
					})
					.to(this.roomChildren.shelves.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						onComplete: resolve,
						duration: 0.5,
					})
					.to(this.roomChildren.clock.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
						onComplete: resolve,
						duration: 0.5,
					})
					.to(
						this.roomChildren.flooritems.scale,
						{
							x: 1,
							y: 1,
							z: 1,
							duration: 1,
							ease: "power2.out",
							duration: 0.5,
						},
						"same1"
					)
					.to(
						this.roomChildren.chair.scale,
						{
							x: 1,
							y: 1,
							z: 1,
							duration: 1,
							ease: "power2.out",
							onComplete: resolve,
						},
						"same1"
					)
					.to(
						this.roomChildren.chair.rotation,
						{
							y: 4 * Math.PI - 1.5707963267948966,
							ease: "back.out(0.5)",
							onComplete: resolve,
							duration: 2,
						},
						"same1"
					);
			}
		});
	}
	onScroll(e) {
		if (e.deltaY > 0) {
			window.removeEventListener("wheel", this.scrollOnceEvent);
			this.secondIntro();
		}
	}
	async playIntro() {
		await this.firstIntro();
		this.scrollOnceEvent = this.onScroll.bind(this);
		window.addEventListener("wheel", this.scrollOnceEvent);
	}
	async playSecondIntro() {
		await this.secondIntro();
	}
}
