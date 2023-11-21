class Validation {
  static maxLength = (max) => (value) =>
    value.length > max ? `You must enter no more than ${max} characters` : '';

  static required = () => (value) => value.length === 0 ? `Can't be blank` : '';

  static oneMoreChecked = (count) => (val, ctx) => {
    let checkedCount = 0;
    for (let item of ctx.$field.children) {
      if (item.nodeName === 'INPUT' && item.checked) {
        checkedCount++;
      }
    }

    return checkedCount >= count ? '' : `You should choose minimum ${count} option`;
  };

  static selectRequired = () => (val, ctx) =>
    ctx.$select.lastChild.selectedIndex === 0 ? 'Must choose size of salary' : '';

  static switchChecked = () => (val, ctx) =>
    ctx.$field.firstChild.firstChild.checked === false ? '' : 'You should agree with this ***';
}
