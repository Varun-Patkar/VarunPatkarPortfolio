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
					.to(".preloader", {
						opacity: 0,
						delay: 1,
						onComplete: () => {
							document.querySelector(".preloader").classList.add("hidden");
						},
					})
					.to(this.roomChildren.preloader.scale, {
						x: 0.5,
						y: 0.5,
						z: 0.5,
						ease: "back-out(2.5)",
						duration: 0.7,
					})
					.to(this.room.position, {
						x: -1.2,
						ease: "power1-out",
						duration: 0.7,
					})
					.to(
						".intro-text",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
							onComplete: resolve,
						},
						"arrow"
					);
			} else {
				this.camera.trackingCamera.position.x = -0.1;
				this.camera.trackingCamera.position.z = 10;
				this.timeline
					.to(".preloader", {
						opacity: 0,
						delay: 1,
						onComplete: () => {
							document.querySelector(".preloader").classList.add("hidden");
						},
					})
					.set(this.room.position, {
						z: 3,
					})
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
					})
					.to(
						".intro-text",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
							onComplete: resolve,
						},
						"arrow"
					);
			}
		});
	}
	secondIntro() {
		return new Promise((resolve) => {
			this.secondTimeline = new GSAP.timeline();
			if (this.device === "desktop") {
				this.camera.trackingCamera.position.y = 1.5;
				this.secondTimeline
					.to(
						".intro-text",
						{
							autoAlpha: 0,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow1"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 0,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow1"
					)
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
						duration: 0.5,
					})
					.to(this.roomChildren.clock.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
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
					)
					.to(
						".hero-main",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".hero-second",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".toggle-bar",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
							onComplete: resolve,
						},
						"texttime"
					);
			} else {
				this.secondTimeline
					.to(
						".intro-text",
						{
							autoAlpha: 0,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow1"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 0,
							duration: 0.3,
							ease: "power1-out",
						},
						"arrow1"
					)
					.to(this.room.position, {
						x: -0.1,
						y: 0,
						z: 3,
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
					.set(this.room.position, {
						z: 0,
					})
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
						duration: 0.5,
					})
					.to(this.roomChildren.clock.scale, {
						x: 1,
						y: 1,
						z: 1,
						duration: 1,
						ease: "power2.out",
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
					)
					.to(
						".hero-main",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".hero-second",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".arrow-svg-wrapper",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
						},
						"texttime"
					)
					.to(
						".toggle-bar",
						{
							autoAlpha: 1,
							duration: 0.3,
							ease: "power1-out",
							onComplete: resolve,
						},
						"texttime"
					);
			}
		});
	}
	onScroll(e) {
		if (e.deltaY > 0) {
			this.removeEventListeners();
			this.playSecondIntro();
		}
	}
	onTouch(e) {
		this.initialY = e.touches[0].clientY;
	}
	onTouchMove(e) {
		let currentY = e.touches[0].clientY;
		let difference = this.initialY - currentY;
		if (difference > 0) {
			this.removeEventListeners();
			this.playSecondIntro();
		}
		this.initialY = null;
	}
	removeEventListeners() {
		//Desktop
		window.removeEventListener("wheel", this.scrollOnceEvent);
		//Mobile
		window.removeEventListener("touchstart", this.touchStart);
		window.removeEventListener("touchmove", this.touchStart);
	}
	async playIntro() {
		await this.firstIntro();
		this.moveFlag = true;
		//Desktop
		this.scrollOnceEvent = this.onScroll.bind(this);
		window.addEventListener("wheel", this.scrollOnceEvent);
		//Mobile
		this.touchStart = this.onTouch.bind(this);
		this.touchMove = this.onTouchMove.bind(this);
		window.addEventListener("touchstart", this.touchStart);
		window.addEventListener("touchmove", this.touchMove);
	}
	async playSecondIntro() {
		this.moveFlag = false;
		await this.secondIntro();
		this.emit("enableControls");
	}

	move() {
		if (this.device === "desktop") {
			this.room.position.set(-1.2, 0, 0);
		} else {
			this.room.position.set(0, 0, -1);
		}
	}
	update() {
		if (this.moveFlag) {
			this.move();
		}
	}
}
