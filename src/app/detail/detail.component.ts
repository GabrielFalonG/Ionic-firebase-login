import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss();
  }
}
