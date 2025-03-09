import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableCardProps {
    arabicName: string;
    transcription: string;
    translation: string;
    info: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
                                                           arabicName,
                                                           transcription,
                                                           translation,
                                                           info,
                                                       }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg shadow-md p-4 bg-white w-full max-w-md mx-auto">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{arabicName}</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="mt-4 space-y-2">
                    <p><strong>Транскрипция:</strong> {transcription}</p>
                    <p><strong>Перевод:</strong> {translation}</p>
                    <p><strong>Информация:</strong> {info}</p>
                </div>
            )}
        </div>
    );
};

export default ExpandableCard;