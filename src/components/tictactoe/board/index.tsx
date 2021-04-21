import * as React from 'react'
import { TapArea } from './tapArea'
import { TicTacToeValue } from '../types'

import './styles.scss'

export interface BoardProps {
    gameState: TicTacToeValue[][]
    winMove?: number[][]
    onTap: (row: number, col: number) => void
}

export function Board(props: BoardProps) {
    const { gameState: game, winMove, onTap }  = props
    
    // ---------------------------------------------
    // Functions

    function isPartOfWinMove(row: number, col: number) {
        return winMove && winMove.some((move) => move[0] === row && move[1] === col)
    }

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'tttd-board'}>
            {[0, 1, 2].map((row) =>
                <React.Fragment key={row}>
                    {[0, 1, 2].map((col) =>
                        <TapArea
                            key={col}
                            value={game[row][col]}
                            highlight={isPartOfWinMove(row, col)}
                            onTap={() => { onTap(row, col) }}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}