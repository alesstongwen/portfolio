type ScrapbookWindowProps = {
  title: string;
  content: string;
  imgSrc: string;
};

const ScrapbookWindow = ({ title, content, imgSrc }: ScrapbookWindowProps) => {
  return (
    <div className="min-w-[300px] max-w-[300px] mb-6 border-4 border-white rounded-lg shadow-lg overflow-hidden bg-gray-100">
      {/* Image at the top, filling the entire block */}
      <div className="relative w-full h-48">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="px-4 pb-6 bg-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default ScrapbookWindow;
