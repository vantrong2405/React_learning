import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6
export default class BareInput extends Component {
    render() {
        const { value, ...rest } = this.props

        return (
            <div>
                <input value={value} type={rest.type} autoFocus={rest.autoFocus} onChange={() => { }} />
            </div>
        )
    }
}

BareInput.propTypes  = {
    value : PropTypes.string,
    type : PropTypes.string.isRequired,
} 



// export default function BareInput({value,type}) {
//     console.log(value,type);
//   return (
//     <input value={value} onChange={() => { }} />
//   )
// }


