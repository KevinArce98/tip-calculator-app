const TotalAmount = ({ title, subtitle, amount }) => {
    return (
        <div className="total mb-1 md:mb-11">
            <div className="grid grid-cols-2">
                <div className="title">
                    <p className="text-white">{title}</p>
                    <p>{subtitle}</p>
                </div>
                <div className="value">
                    ${amount}
                </div>
            </div>
        </div>
    )
}

export default TotalAmount
