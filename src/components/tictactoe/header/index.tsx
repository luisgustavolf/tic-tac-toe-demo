import * as React from 'react'
import { PlayerSymbol } from '../playerSymbol'
import { TicTacToeValue } from '../types'

export interface HeaderProps {
    hasEnded: boolean
    winner?: TicTacToeValue
    nextPlayer: TicTacToeValue
    onReset: () => void
}

export function Header(props:HeaderProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'tttd-header'}>
            <h2>Tic Tac Toe</h2>
            {!props.winner && 
                <div>
                    Next player: <PlayerSymbol value={props.nextPlayer}/>
                </div>
            }
            {props.winner && 
                <div>
                    Winner: <PlayerSymbol value={props.winner}/>
                </div>
            }
            <div>
                <button onClick={props.onReset}>Reset</button>
            </div>
        </div>
    )
}