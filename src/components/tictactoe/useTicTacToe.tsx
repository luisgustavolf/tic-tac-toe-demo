import * as React from 'react'
import { TicTacToeValue } from './types';
import { useGameStatus } from './useGameStatus';

function getInitialGame(): TicTacToeValue[][] {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
}

export function useTicTacToe() {
    const [player, setPlayer] = React.useState<TicTacToeValue>(1);
    const [game, setGame] = React.useState(getInitialGame())
    const { hasEnded } = useGameStatus({ game })
    
    const winner = hasEnded && player * -1

    const tap = React.useCallback((row, col) => {
        if (hasEnded) {
            alert('Cannot move, game has ended...')
        } else if (game[row][col]) {
            alert('Invalid move')
        } else {
            game[row][col] = player
            setGame(game)
            setPlayer((prev) => prev * -1 as TicTacToeValue)
        }
    }, [game, player, hasEnded])

    const reset = React.useCallback(() => {
        setGame(getInitialGame())
    }, [])

    return {
        hasEnded,
        winner,
        player,
        game,
        tap,
        reset
    }
}