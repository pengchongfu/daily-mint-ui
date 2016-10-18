import moment from 'moment'

export default {
  name: 'Before',
  data () {
    return {
      pickerValue: new Date(),
      tempPickerValue: null
    }
  },
  computed: {
    pickerString () {
      return moment(this.pickerValue).format('YYYYMMDD')
    }
  },
  methods: {
    onInput (value) {
      this.tempPickerValue = value
    },
    openPicker () {
      this.$refs.picker.open()
    },
    confirm () {
      this.pickerValue = this.tempPickerValue
    }
  },
  render (h) {
    return (
      <div>
        <mt-cell title={this.pickerString}>
          <mt-button size="small" type="primary" nativeOn-click={this.openPicker}>选择日期</mt-button>
        </mt-cell>
        <mt-datetime-picker
          ref="picker"
          type="date"
          value={this.pickerValue}
          on-input={this.onInput}
          endDate={new Date()}
          on-confirm={this.confirm}>
        </mt-datetime-picker>
      </div>
    )
  }
}
