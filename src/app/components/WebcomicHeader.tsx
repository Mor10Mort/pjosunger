interface WebcomicHeaderProps {
    title: string;
    description: string;
}

const WebcomicHeader: React.FC<WebcomicHeaderProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg max-w-3xl mb-8 px-4 text-gray-800">{description}</p>
        </div>
    );
};

export default WebcomicHeader;
