import * as React from 'react'
import { PlayerSymbol } from '../playerSymbol'
import { TicTacToeValue } from '../types'
import './styles.scss'

export interface TapAreaProps {
    value: TicTacToeValue,
    highlight?: boolean
    onTap: () => void
}

export function TapArea(props:TapAreaProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div 
            className={`tttd-tap-area ${props.highlight ? 'highlight' : ''}`}
            onClick={()=> props.onTap()}
        >
            <PlayerSymbol value={props.value}/>
        </div>
    )
}