import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { namesData, NameData } from "../data/namesData";

const Home = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-[#122428] min-h-screen">
            {/* Список имен */}
            <div className="space-y-4">
                {namesData.map((item: NameData, index: number) => (
                    <div
                        key={index}
                        className="w-full border border-green-800 rounded-xl p-4 bg-green-900/20"
                    >
                        {/* Верхняя часть карточки */}
                        <div className="flex justify-between items-center">
                            {/* Арабское имя */}
                            <h3 className="text-2xl font-bold text-green-300 text-right">{item.arabicName}</h3>
                            {/* Кнопка стрелочки */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="focus:outline-none"
                            >
                                {openIndex === index ? (
                                    <ChevronUp size={24} className="text-green-400" />
                                ) : (
                                    <ChevronDown size={24} className="text-green-400" />
                                )}
                            </button>
                        </div>

                        {/* Раскрывающаяся часть */}
                        {openIndex === index && (
                            <div className="mt-4 space-y-2 text-right">
                                {/* Транскрипция */}
                                <p className="text-green-400">
                                    <strong>Транскрипция:</strong> {item.transcriptName}
                                </p>
                                {/* Перевод */}
                                <p className="text-green-400">
                                    <strong>Перевод:</strong> {item.translateName}
                                </p>
                                {/* Информация */}
                                <p className="text-green-400">
                                    <strong>Информация:</strong> {item.info}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;