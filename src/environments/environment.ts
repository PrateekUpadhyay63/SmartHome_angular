// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSxxxxxxxxxxx1e63TDg",
    authDomain: "xxxxxxxxx-xxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxx-xxxxxxx.firebaseio.com",
    projectId: "xxxxxxxx-xxxxxxxxx",
    storageBucket: "",
    messagingSenderId: "xxxxxxxxx",
    appId: "1:xxxxxxxx:web:xxxxxxxxxxxx"
  }
};

export const config = {
  BCS_IP: '10.0.0.2',
  FRONIUS_IP: '192.168.0.111',
  FRONIUS_IP_STR: '192_168_0_111',
  TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZjg0OGI5NTA5ZjY0ZmE1OWMyYjg4NWY2MjJkZmI3MiIsImlhdCI6MTYxMjUwODEzMCwiZXhwIjoxOTI3ODY4MTMwfQ.fQM3gMj5pi7cs5URnOIhNJrfHOxi1yjSKurXScNicBo'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
