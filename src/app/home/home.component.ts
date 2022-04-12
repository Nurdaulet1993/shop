import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

interface Good {
  id: string;
  name: string;
  price: number;
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goods$ = this.afs.collection<Good>('goods')
    .valueChanges({ idField: 'id' })

  constructor(
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {}

}
