interface FunctionalitiesColumnProps {
    functionality: {
      functionalitiesTitle: string;
      functionalitiesList: { listInfo: string }[];
    };
    gradientDirection: string;
  }
  
  export default function FunctionalitiesColumn({
    functionality,
    gradientDirection,
  }: FunctionalitiesColumnProps) {
    return (
      <div
        className="rounded-lg p-1 flex-grow h-full"
        style={{ background: `linear-gradient(${gradientDirection}, #1AA7A7, #C0FFC8)` }}
      >
        <div className="bg-white rounded-lg shadow p-5 h-full">
          <h3 className="mb-3 px-7 text-2xl font-bold">
            {functionality.functionalitiesTitle}
          </h3>
          <ul className="list-disc px-8">
            {functionality.functionalitiesList.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 pb-3 last:pb-0 text-xl font-light">
                {item.listInfo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  