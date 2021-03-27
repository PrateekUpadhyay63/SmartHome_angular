import {Component} from "@angular/core";

import {Platform} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
})
export class AppComponent {
	public appPages = [
		{
			title: "Home",
			url: "/home",
			icon: "home",
		},
		{
			title: "Stats",
			url: "/stats",
			icon: "stats",
		},
		{
			title: "Activity",
			url: "/activity",
			icon: "walk",
		},
		// {
		// 	title: "Intro",
		// 	url: "/intro",
		// 	icon: "walk",
		// },

		{
			title: "Login",
			url: "/login",
			icon: "log-in",
		},
		{
			title: "Forgot",
			url: "/forgot",
			icon: "lock",
		},
		{
			title: "Register",
			url: "/register",
			icon: "list",
		},
		{
			title: "Calendar",
			url: "/minimal",
			icon: "calendar",
		},
		{
			title: "New Event",
			url: "/new",
			icon: "add-circle",
		},
		{
			title: "Room",
			url: "/room",
			icon: "bed",
		},
		{
			title: "Room 2",
			url: "/room2",
			icon: "bed",
		},
		{
			title: "Charts",
			url: "/chart",
			icon: "thermometer",
		},
		{
			title: "Profile",
			url: "/profile",
			icon: "image",
		},
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
