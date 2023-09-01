import './button.css'

const Button = ({ item, x, y,styles = {}}) => {
    const style = styles
    style.width = 90*x + "px"
    style.height = 90*y + "px"

    return <button className='button' style={style}>
        <h2>{item}</h2> </button >
}

export default Button