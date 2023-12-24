import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.dialog.open(ModalComponent, {
      enterAnimationDuration: '150ms',
      exitAnimationDuration: '100ms',
      position: { top: '100px' },
    });
  }
}
