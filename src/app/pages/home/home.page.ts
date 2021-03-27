import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	gallery: any = [
		{
			id: "1",
			name: "Livingroom",
			image: "/assets/img/livingroom.jpg",
			tmp: 23.3,
		},
		{id: "2", name: "Kitchen", image: "/assets/img/kitchen.jpg", tmp: 24.6},
		{id: "3", name: "Bedroom", image: "/assets/img/room1.jpg", tmp: 22.9},
		{id: "3", name: "Bedroom", image: "/assets/img/room2.jpg", tmp: 22.3},
		{id: "3", name: "Bedroom", image: "/assets/img/room3.jpg", tmp: 18.5},
	];

	//Home data
	average: any = {temperature: 23.4, humidity: 89, light: 1400, power: 3.4};

	rooms: any = [
		{name: "Home", image: "bed.svg", link: "/home"},
		{name: "Statistics", image: "tray.svg", link: "/stats"},
		{name: "Activity", image: "bathtub.svg", link: "/activity"},
	];

	constructor(
		private authService: AuthService,
		private router: Router,
		public alertController: AlertController,
		private toastCtrl: ToastController
	) {}

	ngOnInit() {}

	logout() {
		this.presentAlertSucessfull();
	}

	async presentAlertSucessfull() {
		const alert = await this.alertController.create({
			header: "Are you sure?",
			//message: 'Please, login again',
			backdropDismiss: true,
			buttons: [
				{
					text: "Cancel",
					role: "cancel",
					handler: blah => {
						console.log("Confirm Cancel: blah");
					},
				},
				{
					text: "Logout",
					handler: () => {
						this.authService.doLogout();
						this.router.navigateByUrl("/login");
					},
				},
			],
		});

		await alert.present();
	}

	async showToast(msg: any) {
		const toast = await this.toastCtrl.create({
			header: msg,
			position: "bottom",
			duration: 3000,
		});
		toast.present();
	}
	// public slideOptsOne = {
	// 	initialSlide: 0,
	// 	slidesPerView: 1,
	// 	autoplay: 1000,
	// };
}
