// dependency: inputsAreValid
import { inputsAreValid } from './utils/inputs-are-valid'
export class AlertService {
  constructor() {
    this.errorBox = document.getElementById('error')
  }

  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    errorBox.classList.remove("invisible");
    errorBox.innerText = fullMessage;
  };

  hideErrors() {
    errorBox.classList.add("invisible");
  };
}

