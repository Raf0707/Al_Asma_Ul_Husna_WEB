// src/pages/AboutApp.tsx
import {
    FaAndroid,
    FaApple,
    FaInfoCircle,
    FaCode,
    FaRubleSign,
    FaUser,
    FaEnvelope,
    FaStar,
    FaVk,
    FaTelegram,
    FaCogs,
} from "react-icons/fa"; // Иконки из react-icons

const AboutApp = () => {
    return (
        <div className="min-h-screen bg-[#122428] flex flex-col items-center justify-center overflow-y-auto pt-16">
            {/* Основной контейнер */}
            <div className="w-full sm:w-screen space-y-4 px-4 sm:px-12 py-6">
                {/* Карточка с названием приложения и подзаголовком */}
                <div className="w-full border border-[#14442e] rounded-xl p-12 bg-[#122428] text-center">
                    {/* Заголовок с логотипом */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        {/* Логотип */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl sm:text-2xl font-bold">٩٩</span>
                        </div>
                        {/* Название приложения */}
                        <h2 className="text-[28px] font-bold text-[#86efac]">Al Asma Ul Husna</h2>
                    </div>
                    {/* Подзаголовок */}
                    <p className="text-xl sm:text-2xl text-[#4ade80]">from R&R</p>
                </div>

                {/* Карточка для каждого элемента */}
                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaInfoCircle size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Версия: 1.0</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaCode size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Исходный код</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaRubleSign size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Поддержать автора</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaAndroid size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Скачать на Android</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaApple size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Скачать на iOS</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaUser size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Рафаил Кикматулин</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaEnvelope size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">rat_android-dev@mail.ru</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaStar size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Оценить приложение</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaVk size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Мы в VK</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaTelegram size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Мы в Telegram</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaCode size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Другие Приложения</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center">
                    <div className="flex items-center justify-center space-x-4">
                        <FaCogs size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Настройки</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutApp;