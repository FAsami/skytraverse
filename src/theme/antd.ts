import { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1770F2',
    borderRadius: 3
  },
  components: {
    Input: {
      controlHeight: 44
    },
    InputNumber: {
      controlHeight: 44
    },
    Select: {
      controlHeight: 44
    },
    DatePicker: {
      controlHeight: 44
    },
    Radio: {
      controlHeight: 44
    }
  }
}

export { theme }
