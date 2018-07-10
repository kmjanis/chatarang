import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'

//const Room = ({ roomName }) => {
  //return (
    //<li className={css(styles.item)} key={roomName}>
      //<a href="/" className={css(styles.link)}>
        //{roomName}
      //</a>
    //</li>
  //)
//}
class Room extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick(e) {
        e.preventDefault()
        this.props.setCurrentRoom(this.props.roomName)
    }
    render(){
        return(
    <li className={css(styles.item)}>
      <a href={this.props.roomName} 
        className={css(styles.link)}
        onClick={this.onClick}>
        {this.props.roomName}
      </a>
    </li>
  )
}
            
    }

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room