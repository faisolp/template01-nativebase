
import React, { Component } from 'react';
import { Heading, Button } from  "native-base";
import { slide as Menu } from 'react-burger-menu'


interface IStatus {
  IsOpen:boolean;
}
class Demo extends Component<any,IStatus> {
    constructor(props:any) {
      super(props)
    
      this.state = {
        IsOpen:false
      };
    };
    isMenuOpen = (IsOpen:boolean)=> {
      return this.setState({IsOpen});
    };
    
    showSettings (event:any) {
      event.preventDefault();
         }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      const {IsOpen} =this.state;
      return (
        <>
        <Heading>
          <Button onBlur={()=>this.setState({IsOpen:!IsOpen})}>Menu </Button>
        </Heading>
        <Menu width={ '20%' } isOpen={ IsOpen }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        </>
      );
    }
  }
export default  Demo