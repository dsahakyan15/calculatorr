import { Component } from 'react'

import './button.css'

class Button extends Component{
    render(){
        const { item, x, y, styles = {} } = this.props

        const style = styles
        style.width = 90 * x + "px"
        style.height = 90 * y + "px"

        return <button className='button' style={style}>
            <h2>{item}</h2> </button >
    }


}

export default Button