import * as React from 'react'
import { TicTacToeValue } from '../types'
import { ValueAsPlayer } from '../valueAsPlayer'

import './styles.scss'

export interface TapAreaProps {
    value: TicTacToeValue,
    onTap: () => void
}

export function TapArea(props:TapAreaProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div 
            className={'tttd-tap-area'}
            onClick={()=> props.onTap()}
        >
            <ValueAsPlayer value={props.value}/>
        </div>
    )
}