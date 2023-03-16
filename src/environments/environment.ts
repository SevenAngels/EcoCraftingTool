// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  craftingDataApi: 'https://us-east1-eco-crafting-api.cloudfunctions.net/eco-crafting-data',
  releasesUrl: 'https://api.github.com/repos/aritchie05/EcoCraftingTool/releases',
  imageBaseUrl: 'http://localhost:4200/assets/img/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
