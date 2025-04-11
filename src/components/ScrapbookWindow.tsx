type ScrapbookWindowProps = {
  title: string;
  content: string;
};

const ScrapbookWindow = ({ title, content }: ScrapbookWindowProps) => {
  return (
    <div className="w-[300px] p-4 rounded-lg shadow-xl bg-white border border-dashed border-gray-300 rotate-[-1deg]">
      <h3 className="text-md font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};

export default ScrapbookWindow;
