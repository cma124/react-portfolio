const SkillCard = ({ logo, skill }) => {
  return (
    <div className="skill-card">
      <img src={logo} alt={skill} />
      <p className="leading-normal">{skill}</p>
    </div>
  );
};

export default SkillCard;
