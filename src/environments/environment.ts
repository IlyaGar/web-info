// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrlLog: 'http://192.168.77.251:90',
  apiUrlLog: 'http://192.168.7.194:330/',
  // apiUrlLog: 'http://192.168.77.251:90/',
  // apiUrl: 'http://192.168.1.38:120',
  // apiUrl:'http://192.168.77.251:90/',
  apiUrl: 'http://192.168.7.194:330/',
  apiUrlPayment: 'http://192.168.7.194:330/',
  apiUrlImg: 'https://mile.by/gtools/getImg/index.php',
  cookieName: 'user-info-mile',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
