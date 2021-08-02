
const Button = ({ children, onClick, className = '' }) => {
    return (
        <button className={`btn py-2 rounded ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
