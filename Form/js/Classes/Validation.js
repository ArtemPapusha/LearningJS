class Validation {
  static maxLength = (max) => (value) =>
    value.length > max ? `You must enter no more than ${max} characters` : '';

  static required = () => (value) => value.length === 0 ? `Can't be blank` : '';

  static oneMoreChecked = (count) => () => {
    const checkboxes = document.querySelectorAll('.field-input-checkbox');
    let checkedCount = 0;

    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        checkedCount++;
      }
    }

    return checkedCount >= count
      ? ''
      : `You should choose minimum ${count} option`;
  };

  static selectRequired = () => (value) =>
    value === '-Choose size of your salary-'
      ? 'Must choose size of salary'
      : '';

  static switchChecked = () => () => {
    const $inputSwitch = document.querySelector('.field-input-checkbox-Switch');

    return !$inputSwitch.checked ? '' : 'You should agree with this ***';
  };
}
