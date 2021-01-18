import React,{Component} from 'react';
import {FormControl,TextField, FormHelperText, Input, InputLabel} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



class Del extends Component{
    constructor(props){
        super(props);
        this.state={
            editing:false
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);

    }
    edit(){
        this.setState({
            editing:true
        })
        console.log("Edit it");
    }
    delete(){
        this.props.onDelete(this.props.index);
    }
    save(e){
        e.preventDefault();
        this.props.onChange(this._name.value ,this._date.value ,this._city.value , this.props.index);
        this.setState({
            editing:false
        })
    }

    handleInput(event) {
        this.setState({
            name: event.target.value
        });
    }

    renderForm(){
        return(
            <div>
                <form  noValidate autoComplete="off">
                    <TextField
                        ref = {input => (this._name=input)}
                        id="standard-helperText"
                        label="Name"
                        defaultValue="Default Value"
                    />
                    <TextField
                        ref = {input => (this._city=input)}
                        id="standard-helperText"
                        label="City"
                        defaultValue="Default Value"
                    />
                    <TextField
                        ref = {input => (this._date=input)}
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="Default Value"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {/*<input ref = {input => (this._name=input)}/>*/}
                    {/*<input ref = {input => (this._city=input)}/>*/}
                    {/*<input ref = {input => (this._date=input)}/>*/}
                    <button onClick = {this.save}>Save</button>
                </form>
            </div>
        )
    }


    renderUI(){
        return(
            <div className="del">
                <div>{this.props.children}</div>
                <span>
                    <button onClick = {this.edit}>Edit</button>
                    <button onClick = {this.delete}>Delete</button>
                </span>
            </div>
        )
    }

    render(){
        return this.state.editing? this.renderForm() : this.renderUI();
    }

}
export default Del;