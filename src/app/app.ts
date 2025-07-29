import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Navbar],
  templateUrl: './app.html'
})
export class App {}
