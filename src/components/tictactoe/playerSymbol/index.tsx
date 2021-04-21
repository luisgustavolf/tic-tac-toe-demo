import * as React from 'react'
import { TicTacToeValue } from '../types'

export interface PlayerSymbolProps {
    value: TicTacToeValue
}

export function PlayerSymbol(props: PlayerSymbolProps) {
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