const ExperienceCard = ({ position, company, period, description }) => {
  return (
    <div className="flex justify-start items-stretch gap-7">
      <div className="pb-8">
        <div className="bg-lightprimary aspect-square w-5 rounded-full mt-1.5 mb-1"></div>
        <div className="w-0.5 h-full bg-primary mx-auto"></div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">{position}</h3>
        <h4>{company}</h4>
        <h4 className="text-gray-400">{period}</h4>

        <ul>
          {description.length &&
            description.map((desc, index) => <li key={index}>{desc}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
