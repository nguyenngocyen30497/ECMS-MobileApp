import { ApikhoahocService } from './../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-hoc-tap',
  templateUrl: './hoc-tap.page.html',
  styleUrls: ['./hoc-tap.page.scss'],
})
export class HocTapPage implements OnInit {
  layLopLQ: any=[];
  constructor(
    private router: Router, 
    private apikhoahocService :ApikhoahocService, 
    private loadingController: LoadingController,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getLopLienQuan();
  }
 
  async getLopLienQuan() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading'
    // });
    // await loading.present();
    await this.apikhoahocService.getLopLQById("ID5")
      .subscribe(res => {
        console.log(res);
        this.layLopLQ = res;
        // loading.dismiss();
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }
  
 
}
