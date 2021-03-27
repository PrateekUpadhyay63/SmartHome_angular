import {Component, OnInit} from "@angular/core";
import {HttpService} from "./../../services/https.service";
import {ModalController} from "@ionic/angular";
import {AddusermodalPage} from "./../modal/addusermodal/addusermodal.page";

@Component({
	selector: "app-activity",
	templateUrl: "./activity.page.html",
	styleUrls: ["./activity.page.scss"],
})
export class ActivityPage implements OnInit {
	constructor(
		private httpService: HttpService,
		public modalController: ModalController
	) {}

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		// console.log("jhdsavchbcasm");

		// setInterval(
		// 	() =>
				this.httpService.getUsers().subscribe(users => {
					console.log("User", users);
				})
    //     ,
		// 	5000
		// );
	}

	async addUser() {
		const modal = await this.modalController.create({
			component: AddusermodalPage,
		});
		return await modal.present();
	}

	async removeUser(user) {
		this.httpService.removeUser(user).subscribe(user => {
			console.log(user);
		});
	}

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
}
