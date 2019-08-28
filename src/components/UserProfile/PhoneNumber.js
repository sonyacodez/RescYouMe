import React, {Component} from 'react'
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp'

class PhoneNumber extends Component {
    constructor(){
        super()
        this.state = { 
            phoneNumber: 0,
            showInput: false
        }
    }
    showInput = () => this.setState({ showInput: true });

    focusInput = component => component ? component.focus() : null;

    updateContactKeys = e => this.setState({ [e.target.name]: e.target.value });

    deleteUserContact = async() => await this.props.deleteUserContact(this.props.contact._id);

    updateUserContactNumber = async(e) => {
        if(e.which === 13){
            this.setState({ showInput: false })
            return await this.props.updateUserContactNumber(this.props.contact._id, this.state.phoneNumber)
        }
    };

    render() {
        const c = this.props.contact
        return (
            <div style={{borderWidth: "5px", borderStyle:"groove"}}>
                <HighlightOffSharpIcon style={{marginTop:"5px"}} onClick={this.deleteUserContact}></HighlightOffSharpIcon>
                <span style={{marginBottom:"5px", color:"beige"}}><strong> {c.name}: </strong></span>
                {this.state.showInput ? <input ref={this.focusInput} name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateContactKeys} onKeyPress={this.updateUserContactNumber} type="tel"/> : <span style={{color:"beige"}}onClick={this.showInput} >{c.phoneNumber}</span>}
            </div>
        )
    }
}
export default PhoneNumber