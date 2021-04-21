import * as React from 'react'
import { TicTacToeValue } from '../types'
import { useBoard } from './hook'
import { TapArea } from './tapArea'

import './styles.scss'

export interface BoardProps {
    gameState: TicTacToeValue[][]
    winMove?: number[][]
    onTap: (row: number, col: number) => void
}

export function Board(props: BoardProps) {
    const { gameState, winMove, onTap }  = props
    const { isPartOfWinMove } = useBoard()

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
                            value={gameState[row][col]}
                            highlight={winMove && isPartOfWinMove(winMove, row, col)}
                            onTap={() => { onTap(row, col) }}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}