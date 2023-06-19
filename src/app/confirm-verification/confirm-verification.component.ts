import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-confirm-verification',
  templateUrl: './confirm-verification.component.html',
  styleUrls: ['./confirm-verification.component.css']
})
export class ConfirmVerificationComponent implements OnInit {

  constructor(
    http: HttpClient,
    router: Router,
  ) {
    http.get('https://msbazar-3e8234d30168.herokuapp.com/confirm-account?token=' + router.url.split('=')[1]).subscribe(
      () => {

      }
    );
    setTimeout(() => {
      router.navigate(['/login']);
    } , 5000);


  }

  ngOnInit(): void {



  }

}
