import * as React from 'react'
import { TicTacToeValue } from '../types'

export interface ValueAsPlayerProps {
    value: TicTacToeValue
}

export function ValueAsPlayer(props: ValueAsPlayerProps) {
    const { value } = props

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <React.Fragment>
            {value === -1 && '🐔'}
            {value === 1 && '🐋'}
        </React.Fragment>
    )
}