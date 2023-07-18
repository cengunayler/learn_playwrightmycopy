import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
// testMatch : zu führende tests hier schreiben    
testMatch: ["tests/3_basicInteractions.test.ts"],
 use: {
  headless:false,
  screenshot: "only-on-failure",
  video:"retain-on-failure",
  launchOptions:{
   slowMo: 1000
  }
 },
 retries: 0,
 //reporting, video min 44.40 - 60.00  >> öffnen index.html datei mit browser in playwright-report 
 //Grün "dot" oder F,  erfolgreich oder nicht.  
 reporter: [["dot"], ["json", {         
  outputFile: "jsonReports/jsonReport.json"
 }], ["html", {
  open: "newer"
 }]]
}
export default config;












