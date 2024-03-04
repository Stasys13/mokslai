import './Button.css'

const Button = ({style, showIcon, text, children}) => {
        // const {style, showIcon, text, children} = props
  return(  
    <button className={style}>
        {showIcon && <span>🎉</span> }
        {text}
        {children}
        </button>
  )
};

export default Button;