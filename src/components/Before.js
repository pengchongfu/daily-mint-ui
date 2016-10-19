import moment from 'moment'
import { beforeGetStories } from '../vuex/types'

export default {
  name: 'Before',
  data () {
    return {
      pickerValue: new Date(),
      tempPickerValue: null
    }
  },
  computed: {
    pickerString: {
      get () {
        let s = moment(this.pickerValue).format('YYYYMMDD')
        this.$store.dispatch(beforeGetStories, s)
        return s
      }
    },
    stories () {
      return this.$store.state.Before.storiesList[this.pickerString]
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
    let list = []
    if (this.stories) {
      for (let i = 0; i < this.stories.length; i++) {
        list.push(
          <mt-cell>
            <img slot="icon" src={'/proxy?url=' + this.stories[i].images[0]} width="75" height="75"/>
            <span>{this.stories[i].title}</span>
          </mt-cell>
        )
      }
    }
    return (
      <div>
        <mt-cell title={this.pickerString}>
          <mt-button size="small" type="primary" nativeOn-click={this.openPicker}>选择日期</mt-button>
        </mt-cell>
        {
          list
        }
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
