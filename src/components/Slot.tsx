interface SlotProps {
    value: string;
    onSquareClick: () => void;
}

export default function Slot(props: SlotProps) {
    const { value, onSquareClick } = props;
    return <>
        <div className=' w-10 h-10 border-2 text-center border-black' onClick={onSquareClick}>
            {value}
        </div>
    </>
}