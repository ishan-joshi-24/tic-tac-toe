import { useState } from "react";
import Slot from "./Slot";

function calculateWinner(squares: Array<string>): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++)
    {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a];
        }
    }
    return null;
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    const status = winner ? `Winner is ${winner}` : `Next Player is ${xIsNext ? 'X' : 'O'}`;


    function onSquareClick(squareNum: number) {
        if (squares[squareNum]) return;
        const newSquares = squares.slice();
        if (xIsNext)
            newSquares[squareNum] = "X";
        else
            newSquares[squareNum] = "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        if (winner)
        {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
        }
    }

    return <>
        <h1 className="text-red-600 size-8 py-10">Tic Tac Toe</h1>
        <div>{status}</div>
        <div className="flex">
            <Slot value={squares[0]} onSquareClick={() => onSquareClick(0)} />
            <Slot value={squares[1]} onSquareClick={() => onSquareClick(1)} />
            <Slot value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        </div>
        <div className="flex">
            <Slot value={squares[3]} onSquareClick={() => onSquareClick(3)} />
            <Slot value={squares[4]} onSquareClick={() => onSquareClick(4)} />
            <Slot value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        </div>
        <div className="flex">
            <Slot value={squares[6]} onSquareClick={() => onSquareClick(6)} />
            <Slot value={squares[7]} onSquareClick={() => onSquareClick(7)} />
            <Slot value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        </div>
    </>
}