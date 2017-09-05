import { Component } from "react"

export default class Idle extends Component {
  static defaultProps = {
    render: () => null,
    onChange: () => {},
    timeout: 1000,
    events: ["mousemove", "mousedown", "keydown", "touchstart", "scroll"]
  }

  state = {
    inactive: true
  }

  timeout = null

  componentDidMount() {
    this.props.events.forEach(event => {
      window.addEventListener(event, this.handleEvent)
    })
  }

  componentWillUnmount() {
    this.props.events.forEach(event => {
      window.removeEventListener(event, this.handleEvent)
    })
  }

  handleChange(inactive) {
    this.props.onChange({ inactive })
    this.setState({ inactive })
  }

  handleEvent = () => {
    if (this.state.inactive) {
      this.handleChange(false)
    }
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.handleChange(true)
    }, this.props.timeout)
  }

  render() {
    return this.props.render(this.state)
  }
}
