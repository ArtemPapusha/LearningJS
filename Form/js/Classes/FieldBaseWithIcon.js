/**
 * Class representing a dot.
 * @extends FieldBase
 */
class FieldBaseWithIcon extends FieldBase {
  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   icon: String,
   * }} args
   */
  constructor({ name, label, placeholder, icon, iconPosition }) {
    super({ name, label, placeholder });
    this.name = name;
    this.label = label;
    this.placeholder = placeholder;
    this.icon = icon;

    this.buildSpanIcon();
  }

  set setIcon(value) {
    this.$icon = value;
  }

  buildSpanIcon = () => {
    const $spanIcon = document.createElement('span');
    $spanIcon.className = `${this.icon}`;
    this.setIcon = $spanIcon;
    return $spanIcon;
  };

  // buildFieldWithIcon = () => {
  //   this.$icon.className = `${this.icon}`;
  // };

  addIconStart = () => {
    if (this.$icon) {
      $wrapperInput.appendChild(this.$icon);
      $wrapperInput.appendChild($input);
    }
  };

  addIconEnd = () => {
    if (this.$icon) {
      $wrapperInput.appendChild($input);
      $wrapperInput.appendChild(this.$icon);
    }
  };

  // setUpIconPosition = (position) => {
  //   this.positions.push(position);
  //   return this;
  // }

  // addIconStart = () => {
  //   .insertBefore(ggg, this.buildSpanIcon)
  // }

  // addIconEnd = () => {

  // }
}
