import * as React from 'react'
import { TicTacToePlayer, TicTacToeValue } from './types';
import { useGameStatus } from './useGameStatus';

function getInitialGame(): TicTacToeValue[][] {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
}

export function useTicTacToe() {
    const [nextPlayer, setNextPlayer] = React.useState<TicTacToePlayer>(1);
    const [gameState, setStateGame] = React.useState(getInitialGame())
    const { hasEnded, winMove } = useGameStatus({ gameState })
    
    // ---------------------------------------------
    // Functions

    const tap = React.useCallback((row, col) => {
        if (hasEnded) {
            alert('Cannot move, game has ended...')
        } else if (gameState[row][col]) {
            alert('Invalid move')
        } else {
            gameState[row][col] = nextPlayer
            setStateGame(gameState)
            setNextPlayer((prev) => prev * -1 as TicTacToePlayer)
        }
    }, [gameState, nextPlayer, hasEnded])

    const reset = React.useCallback(() => {
        setStateGame(getInitialGame())
    }, [])

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations

    const winner = hasEnded ? nextPlayer * -1 as TicTacToePlayer : undefined

    // ---------------------------------------------
    // API

    return {
        hasEnded,
        winner,
        winMove,
        nextPlayer,
        gameState,
        tap,
        reset
    }
}