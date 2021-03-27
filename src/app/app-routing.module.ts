import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {
	canActivate,
	redirectUnauthorizedTo,
	redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLanding = redirectUnauthorizedTo(["login"]);
const redirectLoggedInToItems = redirectLoggedInTo(["home"]);

const routes: Routes = [
	{path: "", redirectTo: "home", pathMatch: "full"},
	{
		path: "home",
		loadChildren:
			"./pages/home/home.module#HomePageModule" /*...canActivate(redirectUnauthorizedToLanding) */,
	},
	{path: "stats", loadChildren: "./pages/stats/stats.module#StatsPageModule"},
	{
		path: "activity",
		loadChildren: "./pages/activity/activity.module#ActivityPageModule",
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
