import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation/confirmation.service';
import { Info } from 'src/app/model/Info';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  info: Info = new Info();
  constructor(private ConfirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.info = this.ConfirmationService.getInfo();
  }
}
