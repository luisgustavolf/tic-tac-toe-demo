import * as React from 'react'

import './styles.scss'
import { TapArea } from './tapArea'
import { useTicTacToe } from './useTicTacToe'

export interface TicTacToeProps {
    children?: any
}

export function TicTacToe(props:TicTacToeProps) {

    const { game, hasEnded, winner, player, tap, reset } = useTicTacToe()

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'tttd-board-wrap'}>
            <h2>Tic Tac Toe</h2>
            <div className={'tttd-board'}>
                {[0,1,2].map((row) =>
                    <React.Fragment key={row}>
                        {[0,1,2].map((col) =>
                            <TapArea 
                                key={col}
                                value={game[row][col]}
                                onTap={() => { tap(row, col) }}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}