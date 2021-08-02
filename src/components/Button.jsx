
const Button = ({ children, onClick, className = '', disabled = false }) => {
    return (
        <button className={`btn py-2 rounded ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
