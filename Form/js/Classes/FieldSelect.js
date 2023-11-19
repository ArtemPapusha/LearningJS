/**
 * Class representing a dot.
 * @extends FieldBaseWithIcon
 */
class FieldSelect extends FieldBaseWithIcon {
  $select = null;
  $label = null;
  $field = null;
  $option = null;
  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   selectList: Array,
   *   checkedOption: String,
   *   icon: String,
   * }} args
   */
  constructor({
    name,
    label,
    placeholder,
    selectList = [],
    checkedOption,
    icon,
  }) {
    super({ name, label, placeholder, icon });
    this.value = '';
    this.selectList = selectList;
    this.checkedOption = checkedOption;

    this.buildLabel();
    this.buildSelect();
    this.buildSpanIcon();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setSelect(value) {
    this.$select = value;
  }

  get $select() {
    return this.$select;
  }

  set setOption(value) {
    this.$option = value;
  }

  get $option() {
    return this.$option;
  }

  set setField(value) {
    this.$field = value;
  }

  get $field() {
    return this.$field;
  }

  buildSelect = () => {
    const $select = document.createElement('select');
    const $label = document.createElement('label');
    $label.setAttribute('for', `field-input-checkbox-${this.name}`);

    $select.className = `field-select-list-${this.name}`;
    $select.setAttribute('name', this.name);
    $select.setAttribute('id', `field-select-${this.name}`);

    const $wrapperSelect = document.createElement('div');
    $wrapperSelect.className =
      'wrapper-input dsp_flex align-items-center gap_3';
    if (this.$icon) {
      $wrapperSelect.appendChild(this.$icon);
    }
    $wrapperSelect.appendChild($select);

    $select.addEventListener('blur', this.handleBlur);

    this.selectList.forEach((value) => {
      const $option = document.createElement('option');
      $option.className = 'field-select-option';
      $option.setAttribute('value', value);
      $option.innerText = value;

      this.setOption = $option;
      $select.appendChild(this.$option);
    });
    this.setSelect = $wrapperSelect;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$label);

    $fragment.appendChild(this.$select);

    this.setField = $fragment;
  };

  /**
   * @param { BlurEvent } event
   */
  handleBlur = (event) => {
    this.handleError(event.target.value);
  };
}
