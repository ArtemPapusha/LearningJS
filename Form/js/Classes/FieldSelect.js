/**
 * Class representing a dot.
 * @extends FieldBaseWithIcon
 */
class FieldSelect extends FieldBaseWithIcon {
  $select = null;
  $label = null;
  $field = null;
  $option = null;
  $wrapper = null;
  /**
   * @param {{
   *   name: String,
   *   label: String,
   *   placeholder: String,
   *   selectList: Array,
   *   checkedOption: String,
   * }} args
   */
  constructor({ name, label, placeholder, selectList = [], checkedOption }) {
    super({ name, label, placeholder });
    this.value = '';
    this.selectList = selectList;
    this.checkedOption = checkedOption;

    this.buildLabel();
    this.buildSelect();
    this.buildField();
    this.buildFieldWrapper();
  }

  set setWrapper(value) {
    this.$wrapper = value;
  }

  get $wrapper() {
    return this.$wrapper;
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
    $wrapperSelect.className = `wrapper-${$select.className} dsp_flex align-items-center gap_3`;

    $wrapperSelect.appendChild($select);

    $select.addEventListener('mouseleave', this.handleBlur);

    this.selectList.forEach((value) => {
      const $option = document.createElement('option');
      $option.className = `field-select-option-${value}`;
      $option.setAttribute('value', value);
      $option.innerText = value;

      this.setOption = $option;
      $select.appendChild(this.$option);
    });
    this.setWrapper = $wrapperSelect;
  };

  buildField = () => {
    const $fragment = document.createDocumentFragment();

    $fragment.appendChild(this.$label);

    $fragment.appendChild(this.$wrapper);

    this.setField = $fragment;
  };

  /**
   * @param { Mouse Event } event
   */
  handleBlur = (event) => {
    this.handleError(event.target.value);
  };
}
