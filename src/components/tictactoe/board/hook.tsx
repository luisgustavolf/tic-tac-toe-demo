import * as React from 'react'

export function useBoard() {
    
    // ---------------------------------------------
    // Functions
    
    const isPartOfWinMove = React.useCallback((winMove: number[][], row: number, col: number) => {
        return winMove && winMove.some((move) => move[0] === row && move[1] === col)
    }, [])

    // ---------------------------------------------
    // Effects
    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // API
    
    return {
        isPartOfWinMove
    }
}