class FieldValidation {
  $errorMassage = null;
  errors = '';

  constructor() {
    this.validations = [];
  }

  buildErrorMessage = () => {
    const $message = document.createElement('div');

    $message.className = `field-error-message`;

    $message.innerText = this.errors;

    this.$fieldWrapper.appendChild($message);

    this.$errorMassage = $message;
  };

  removeErrorMassage = () => {
    this.$errorMassage.remove();
    this.$errorMassage = null;
  };

  handleErrorMassage = () => {
    // if (this.errors && this.$errorMassage?.innerText !== this.errors) {
    //   this.buildErrorMessage();
    // }
    // if (!this.errors && this.$errorMassage) {
    //   this.removeErrorMassage();
    // }
    if (this.errors && this.$errorMassage) {
      this.$errorMassage.innerText = this.errors;
    } else if (this.errors && !this.$errorMassage) {
      this.buildErrorMessage();
    } else if (!this.errors && this.$errorMassage) {
      this.removeErrorMassage();
    }
  };

  addValidation = (validation) => {
    this.validations.push(validation);
    return this;
  };

  handleError = (value) => {
    for (let key of this.validations.keys()) {
      const result = this.validations[key](value);

      if (result) {
        this.errors = result;
        break;
      }

      if (this.validations.length - 1 === key && result === '') {
        this.errors = '';
      }
    }
    this.handleErrorMassage();
  };
}
