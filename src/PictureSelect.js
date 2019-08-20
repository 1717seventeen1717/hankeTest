import React from 'react';
import './App.css';


export default class PictureSelect extends React.Component {
    constructor(props){
        super(props)
        this.state={
            arr : this.props.values
        }
    }
    hadleAll = () =>{
        const {arr} = this.state;
        let checkbox = document.getElementById('checkInput');
        let arrCheck = [];
        if(!checkbox.checked){
            this.setState({
                arr:[]
            })
        }
        else{
            this.props.pictures.map(item=>{
                arrCheck.push(item.id)
            })
            this.setState({
                arr:arrCheck
            })
        }
        this.props.onChange(arrCheck);
    }
    hadleCheck = (e,value) =>{
        const { arr } = this.state;
        if(arr.indexOf(value)!=-1){
            arr.splice(arr.indexOf(arr.indexOf(value)), 1)
        }
        else{
            arr.push(value);
        }
        this.setState({
            arr
        })
        this.props.onChange(arr);
    }
    render() {
        const {pictures} = this.props;
        const {arr} = this.state;
        return (
             <div className = "App">
                <div className="checkAll">
                    <input id="checkInput" checked={arr.indexOf(pictures[0].id)!==-1&&arr.indexOf(pictures[1].id)!==-1&&arr.indexOf(pictures[2].id)!==-1?"checked":""} onChange={this.hadleAll} type="checkbox" value="a" />
                    已选中三个文件
                </div>
                <div className="checkThree">
                    <div className="checkDiv">
                        <input onClick={(e)=>this.hadleCheck(e,pictures[0].id)} className="checkbox" checked= {arr.indexOf(pictures[0].id)!==-1?"checked":""}  type="checkbox" value={pictures[0].id} />
                        <img src={pictures[0].url}/>
                    </div>
                    <div className="checkDiv">
                        <input onClick={(e)=>this.hadleCheck(e,pictures[1].id)} className="checkbox" checked= {arr.indexOf(pictures[1].id)!==-1?"checked":""} type="checkbox" value={pictures[1].id}/>
                        <img src={pictures[1].url}/>
                    </div>
                    <div className="checkDiv">
                        <input onClick={(e)=>this.hadleCheck(e,pictures[2].id)} className="checkbox" checked= {arr.indexOf(pictures[2].id)!==-1?"checked":""} type="checkbox" value={pictures[2].id} />
                        <img src={pictures[2].url}/>
                    </div>
                </div>
             </div>
        )
    }
}