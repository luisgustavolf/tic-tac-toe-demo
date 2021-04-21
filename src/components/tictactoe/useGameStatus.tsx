import { TicTacToeValue } from './types'

export interface UseGameStatusProps {
    gameState: TicTacToeValue[][]
}

export function useGameStatus(props:UseGameStatusProps) {
    const { gameState } = props

    const winMoves = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],

        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]],
    ]

    const winMove = winMoves.find((move) => { 
        const first  = gameState[move[0][0]][move[0][1]]
        const second = gameState[move[1][0]][move[1][1]]
        const third  = gameState[move[2][0]][move[2][1]]
        return Math.abs(first + second + third) === 3
    })

    const hasEnded = !!winMove

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        winMove,
        hasEnded
    }
}