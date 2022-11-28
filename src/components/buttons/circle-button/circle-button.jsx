import style from "./circle-button.module.css";

const CircleButton = ({ children, Tag = 'button' | 'a', ...rest }) => (
    <Tag
        {...rest}
        className={`${style.CircleButton} ${rest.className}`}>
        {children}
    </Tag>
)

export default CircleButton;