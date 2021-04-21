import * as React from 'react'
import { Board } from './board'
import { Header } from './header'
import { useTicTacToe } from './useTicTacToe'

import './styles.scss'

export function TicTacToe() {

    const { gameState, nextPlayer, hasEnded, winner, winMove, tap, reset } = useTicTacToe()

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'tttd-board-wrap'}>
            <Header 
                winner={winner}
                hasEnded={hasEnded}
                nextPlayer={nextPlayer}
                onReset={reset}
            />

            <Board
                gameState={gameState}
                winMove={winMove}
                onTap={tap}
            />
        </div>
    )
}