import React from 'react'
import { filhoComProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
        {filhoComProps(props)}

        {/* {React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, { ...props })
        })} */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {props.children} */}
    </div>