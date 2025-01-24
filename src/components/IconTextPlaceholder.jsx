/* eslint-disable react/prop-types */
export default function IconTexPlaceholder({properties}){    
    return(
        <div className={`${properties.display}`} onClick={properties.handleClick}>
            {properties.hasIcon? properties.icon : null}
            {properties.hasText? <span>{`${properties.text}`}</span>: null}
        </div>
    )
}