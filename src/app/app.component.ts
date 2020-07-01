import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Series";
  userInput: string;
  series = [2, 3, 10, 15, 26, 35, 50, 63, 82];
  displayResult: number;

  onClicked() {
    console.log(typeof this.userInput);
    this.displayResult = this.series[+this.userInput];
  }
}
