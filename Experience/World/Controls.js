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

		this.setScrollTrigger();
	}

	setScrollTrigger() {
		ScrollTrigger.matchMedia({
			//Desktop
			"(min-width: 969px)": () => {
				//Resets
				this.camera.trackingCamera.position.set(0, 2.35, 4.7);
				//Animations
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
			},
			//Mobile
			"(max-width: 968px)": () => {
				//Resets
				this.camera.trackingCamera.position.set(0.25, 3.5, 9);
				//Animations
				this.timeline = new GSAP.timeline();
				this.timeline
					//First Section Animation
					.fromTo(
						this.camera.trackingCamera.position,
						{
							x: 0.25,
							y: 3.5,
							z: 9,
						},
						{
							x: -0.23,
							y: 1.5,
							z: 3,
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
							x: -0.23,
							y: 1.5,
							z: 3,
						},
						{
							x: -0.34,
							y: 3,
							z: 3,
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
							x: -0.34,
							y: 3,
							z: 3,
						},
						{
							x: 0.4,
							y: 2,
							z: 1.5,
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
							x: -0.32,
							y: 0,
							z: 0,
						},
						{
							x: -1,
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
							x: 0.4,
							y: 2,
							z: 1.5,
						},
						{
							x: 0.85,
							y: 2.5,
							z: 3,
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
							x: -1,
							y: 0,
							z: 0,
						},
						{
							x: -0.32,
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
			},
			all: () => {},
		});
	}

	resize() {}

	update() {}
}
