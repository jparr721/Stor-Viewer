import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { BarcodeScanner } from  'ionic-native'
import { ListsPage } from '../lists-page/lists-page';


/**
 * Generated class for the ScanCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scan-code-page',
  templateUrl: 'scan-code-page.html',
})
export class ScanCodePage {
  public scannedItems: string;
  public buttonText: string;
  public isLoading: boolean;


  constructor(private navCtrl: NavController, private navParams: NavParams,
              private barcodeScan: BarcodeScanner) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanCodePage');

    this.buttonText = "Scan";
    this.isLoading = false;
  }

  public scanCode() {
    this.buttonText = "Loading..";
    this.isLoading = true;

    this.barcodeScan.scan().then((barcodeData) => {
      if (barcodeData.cancelled){
        console.log("Use has cancelled the action.");
        this.isLoading = false;
        return false;
      }

      console.log("Scanned");
      console.log(barcodeData);
      this.loadData(barcodeData);
    })
  }

  private loadData(barcodeData){
    this.navCtrl.push(ListsPage, {
      scannedItems: barcodeData.text
    });
  }
}
