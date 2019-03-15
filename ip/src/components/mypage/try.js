import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';



export default class Try extends Component{
    constructor() {
        super();
        this.state = {
          isFlipped: false,
          display  : true
        };
        this.handleClick  = this.handleClick.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
      }
      handleClose1(){
        console.log(this.state.display)
        this.setState({display:false})
        console.log(this.state.display)
      }
      
      handleClick(e) {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
      }
     
    render(props){
        console.log(this.props.title)
        return(
          <div>
            {this.state.display && (
            <div className='container-fluid' style={{'position':'relative'}}>
            
<ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className="card bg-light" key="front" style={{}}>
        <div className="card-body text-center" style={{padding:'0px'}}>
        
       
       <img src={this.props.link} width="100%"  style={{}}></img>
          </div>
          <hr style={{margin:'0px'}}></hr>
          <div className='row py-3'>
           <div className='col col-sm-9'>
          <span style={{marginLeft:'50%'}} ><b>{this.props.title}</b></span>          
          </div>
          
          <div className='col col-sm-3 text-center'>
          <span className="input-group-addon">
	        <i className="fa fa-cog " aria-hidden="true"  onClick={this.handleClick} ></i> 
    
           
       </span>
       </div>
        </div>          
        </div>



     <div className="card bg-light" key="back" >
        <div className="card-body text-center" style={{padding:'0px'}}>
       
       
       <img src="http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg" width="100%"  style={{opacity:"0.1",zIndex:"2",position:"relative"}}></img>
          </div>
          <div className="card-img-overlay">
          <div style={{marginTop:'65%',marginLeft:'35%',marginRight:'auto'}}><span className="input-group-addon">
            <i className="fa fa-star" aria-hidden="true"  onClick={this.handleClick} ></i> 
            <i className="fa fa-star" aria-hidden="true"  onClick={this.handleClick} ></i> 
            <i className="fa fa-star" aria-hidden="true"  onClick={this.handleClick} ></i> 
            <i className="fa fa-star" aria-hidden="true"  onClick={this.handleClick} ></i> 
            <i className="fa fa-star" aria-hidden="true"  onClick={this.handleClick}  ></i>  
       </span>
       </div>
  </div>
         
          <hr style={{margin:'0px'}}></hr>
          <div className='row py-3'>
           <div className='col col-sm-9'>
          <span style={{marginLeft:'50%'}} ><b>{this.props.title}</b></span>  
          <i className="fa fa-close" onClick={this.handleClose1} style={{float:'left',padding:'1%'}}></i>
        
          </div>
          
          <div className='col col-sm-3 text-center'>
          <span className="input-group-addon">
	        <i className="fa fa-cog" aria-hidden="true"  onClick={this.handleClick} ></i> 

    
           
       </span>

       </div>

        </div>
        </div>
 
      </ReactCardFlip>
            </div>)}
            </div>
        )
    }
}