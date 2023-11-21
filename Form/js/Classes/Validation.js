class Validation {
  static maxLength = (max) => (value) =>
    value.length > max ? `You must enter no more than ${max} characters` : '';

  static required = () => (value) => value.length === 0 ? `Can't be blank` : '';

  static email = () => (value) => {
    const emailRegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.exec(value) ? '' : 'Its not look like email';
  };

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
    ctx.$wrapper.lastChild.selectedIndex === 0 ? 'Must choose size of salary' : '';

  static switchChecked = () => (val, ctx) =>
    ctx.$field.firstChild.firstChild.checked === false ? '' : 'You should agree with this ***';
}
