import { LightningElement,api,wire,track } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
export default class NevigationPageMix extends LightningElement {

  navigateToHomePage() {
      this[NavigationMixin.Navigate]({
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Case",
          actionName: "home",
        },
      });
    }



}