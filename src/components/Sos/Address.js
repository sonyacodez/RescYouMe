/* eslint-disable no-unused-expressions */
import React, {Component} from 'react'

class Address extends Component {
    constructor(){
        super()
        this.state={ victimAddress: "" }
    }

    componentDidMount() {this.props.address ? this.setState({ victimAddress: this.props.address }) : null};

    render() {
      return (
        <div style={{marginLeft:"20%", marginTop:"5%"}}>
            {this.state.victimAddress ? <span style={{marginLeft:"6%"}}>DISTRESS CALL FROM {this.state.victimAddress.split(",").join(" ")}</span> : null}
        </div>
      )
    }
}
export default Address