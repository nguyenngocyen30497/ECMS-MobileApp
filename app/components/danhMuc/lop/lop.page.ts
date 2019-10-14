import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.page.html',
  styleUrls: ['./lop.page.scss'],
})
export class LopPage implements OnInit {
  layLop : any=[];
  
  constructor(
    private apikhoahocService:ApikhoahocService, 
    private router: Router,
    public loadingController: LoadingController,
    public activatedRoute: ActivatedRoute
  ) { }
 
  ngOnInit() {

    this.getLop();

  }

  async getLop() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading'
    // });
    // await loading.present();
    await this.apikhoahocService.getLopById(this.activatedRoute.snapshot.paramMap.get('maKhoa'))
      .subscribe(res => {
        console.log(res);
        this.layLop = res;
        // loading.dismiss();
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }


}
