import { ApikhoahocService } from './../../../services/apikhoahoc.service';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { LoadingController , IonSegment, AlertController} from '@ionic/angular';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  isCSS= true;
  valueSegmento: string;
  hoctap = "hoc tap";
  layDeCuong: any=[];
  displayedColumns: string[] = ['buoi', 'chuDe'];

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /*------------------------------------*/
  // thời khóa biểu
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  // ngày tối thiểu cho ng dùng chọn tại ngày hiện tại
  // thành phần thời gian luôn mong đợi chuỗi ISO => gọi đến chuỗi ISO
  minDate = new Date().toISOString();

  eventSource = [];

  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent, {static: true}) myCal: CalendarComponent;

  constructor(
    private router: Router, 
    private apikhoahocService:ApikhoahocService ,
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,

    private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    // Lớp học
    this.getDeCuong();

    // Thời khóa biểu
    this.resetEvent();
  }
  
  //'lopHoc' là trang đầu tiên được truy cập
  ionViewWillEnter(){
    this.segment.value = 'lopHoc';
  }

  segmentChanged(event){
    // console.log(event)
    this.valueSegmento = event.detail.value;
    console.log(this.valueSegmento);
  }
 

  async getDeCuong() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading'
    // });
    // await loading.present();
    await this.apikhoahocService.getDeCuongById(this.activatedRoute.snapshot.paramMap.get('maLop'))
      .subscribe(res => {
        console.log(res);
        this.layDeCuong = res;
        // loading.dismiss();
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }

  /*-------------------*/
  // Thời khóa biểu
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }
  
  addEvent(){
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    // loadEvents: function() {
    //     this.eventSource.push({
    //         title: 'test',
    //         startTime: startTime,
    //         endTime: endTime,
    //         allDay: false
    //     });
    //     this.myCalendar.loadEvents();
    // }
    this.resetEvent();
  }

  onEventSelected(event){

  }
  onViewTitleChange(event){

  }
  onTimeSelected(event){

  }

 
}
