import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls {
	constructor() {
		this.experience = new Experience();
		this.camera = this.experience.camera;
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.room = this.experience.world.room.actualRoom;
		GSAP.registerPlugin(ScrollTrigger);

		this.setPath();
	}

	setPath() {
		// this.curve = new THREE.CatmullRomCurve3(
		// 	[new THREE.Vector3(0, 1.9, 4.1), new THREE.Vector3(-0.175, 0.736, 0.882)],
		// 	false
		// );
		// const points = this.curve.getPoints(50);
		// const geometry = new THREE.BufferGeometry().setFromPoints(points);
		// const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
		// this.curveObject = new THREE.Line(geometry, material);
		// this.scene.add(this.curveObject);

		this.timeline = new GSAP.timeline();
		this.timeline
			//First Section Animation
			.fromTo(
				this.camera.trackingCamera.position,
				{
					x: 0,
					y: 2.35,
					z: 4.7,
				},
				{
					x: -0.55,
					y: 0.8,
					z: 1.55,
					scrollTrigger: {
						trigger: ".first-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			.fromTo(
				this.camera.trackingCamera.rotation,
				{
					x: -0.32,
					y: 0,
					z: 0,
				},
				{
					x: -0.15,
					y: 0,
					z: 0,
					scrollTrigger: {
						trigger: ".first-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			//Second Section Animation
			.fromTo(
				this.camera.trackingCamera.position,
				{
					x: -0.55,
					y: 0.8,
					z: 1.55,
				},
				{
					x: 0.15,
					y: 2.45,
					z: 1.4,
					scrollTrigger: {
						trigger: ".second-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			.fromTo(
				this.camera.trackingCamera.rotation,
				{
					x: -0.15,
					y: 0,
					z: 0,
				},
				{
					x: -0.4,
					y: 0,
					z: 0,
					scrollTrigger: {
						trigger: ".second-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			//Third Section Animation
			.fromTo(
				this.camera.trackingCamera.position,
				{
					x: 0.15,
					y: 2.45,
					z: 1.4,
				},
				{
					x: 0.2,
					y: 1.2,
					z: 0.8,
					scrollTrigger: {
						trigger: ".third-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			.fromTo(
				this.camera.trackingCamera.rotation,
				{
					x: -0.4,
					y: 0,
					z: 0,
				},
				{
					x: -1.1,
					y: 0,
					z: 0,
					scrollTrigger: {
						trigger: ".third-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			//Fourth Section Animation
			.fromTo(
				this.camera.trackingCamera.position,
				{
					x: 0.2,
					y: 1.2,
					z: 0.8,
				},
				{
					x: 1.4,
					y: 2,
					z: 1.4,
					scrollTrigger: {
						trigger: ".fourth-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			)
			.fromTo(
				this.camera.trackingCamera.rotation,
				{
					x: -1.1,
					y: 0,
					z: 0,
				},
				{
					x: -0.4,
					y: 0,
					z: 0,
					scrollTrigger: {
						trigger: ".fourth-move",
						start: "top top",
						end: "bottom bottom",
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
					ease: "power1",
				}
			);
	}

	resize() {}

	update() {}
}
