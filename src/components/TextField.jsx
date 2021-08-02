

const TextField = ({ value, onChange, icon, type = 'text', placeholder = '', name, hasError = false }) => {
    return (
        <div className="text-field relative">
            {
                icon &&
                <div style={{ backgroundImage: `url(${icon})` }} className="text-field-icon" />
            }
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                className={`rounded text-right py-1 w-full ${icon ? 'pr-3 pl-8' : 'px-1'} ${hasError ? 'error' : ''} `}
            />
        </div>
    )
}

export default TextField
