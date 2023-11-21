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
   * }} args
   */

  constructor({ name, label, placeholder }) {
    super({ name, label, placeholder });
    this.name = name;
    this.label = label;
    this.placeholder = placeholder;
  }

  set setSpanIcon(value) {
    this.$spanIcon = value;
  }

  get spanIcon() {
    return this.$spanIcon;
  }

  addIconEnd = (icon) => {
    this.buildSpanIcon();
    this.$wrapper.appendChild(this.$spanIcon);
    this.$spanIcon.className = `${icon}`;
    return this;
  };

  addIconStart = (icon) => {
    this.buildSpanIcon();
    this.$wrapper.insertBefore(this.$spanIcon, this.$wrapper.firstChild);
    this.$spanIcon.className = `${icon}`;
    return this;
  };

  buildSpanIcon = () => {
    const $spanIcon = document.createElement('span');
    this.$spanIcon = $spanIcon;
  };
}
