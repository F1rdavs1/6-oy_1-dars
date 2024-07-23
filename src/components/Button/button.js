import "./button.css"

const Button = ({title, bgbtn}) => {
    return (
        <button className={bgbtn ? "btn-blue" : "btn-orange"}>{title}</button>
    )
}

export default Button