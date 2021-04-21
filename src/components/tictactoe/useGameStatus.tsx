import * as React from 'react'
import { TicTacToeValue } from './types'

export interface UseGameStatusProps {
    game: TicTacToeValue[][]
}

export function useGameStatus(props:UseGameStatusProps) {
    const { game } = props

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

    const hasEnded = !!(winMoves.find((move) => { 
        const first  = game[move[0][0]][move[0][1]]
        const second = game[move[1][0]][move[1][1]]
        const third  = game[move[2][0]][move[2][1]]
        return Math.abs(first + second + third) === 3
    }))

    // ---------------------------------------------
    // Functions
    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        hasEnded
    }
}