import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Series";
  userInput: string;
  displayResult: number;

  onClicked() {
    console.log(typeof +this.userInput);
    if (+this.userInput === 0) {
      this.displayResult = 2;
    } else if (+this.userInput % 2 !== 0) {
      this.displayResult = Math.pow(+this.userInput + 1, 2) - 1;
    } else {
      this.displayResult = Math.pow(+this.userInput + 1, 2) + 1;
    }
  }
}
