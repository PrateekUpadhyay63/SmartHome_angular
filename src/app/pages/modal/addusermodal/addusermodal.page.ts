import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpService} from "./../../../services/https.service";
import {ModalController} from "@ionic/angular";

@Component({
	selector: "app-addusermodal",
	templateUrl: "./addusermodal.page.html",
	styleUrls: ["./addusermodal.page.scss"],
})
export class AddusermodalPage implements OnInit {
	constructor(
		private httpService: HttpService,
		private router: Router,
		public modalController: ModalController
	) {}

	ngOnInit() {}

	addUser() {
		this.httpService.addUser().subscribe(user => {
			console.log(user);
		});
	}
	async back() {
		console.log("back");
		const modal = await this.modalController.dismiss({
			component: AddusermodalPage,
		});
	}
}
