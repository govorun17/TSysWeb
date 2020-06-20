import {Component, OnInit} from '@angular/core';
import {TodosService} from '../services/todos.service';
import {delay} from "rxjs/operators";



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public searchString: string = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
    // this.onToggle.emit(id);
    this.todosService.onToggle(id);
  }

  onRemove(id: number){
    this.todosService.onRemove(id);
  }
}
