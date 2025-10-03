import React from "react";
import { useTranslation } from "react-i18next";
import { JobExperience as JobExperienceType } from "@/types/job-experience.type";
import { JobExperiencesContainer } from "@/styles/job-experiences.style";

interface JobExperienceProps {
  experiences: JobExperienceType[];
  theme: any;
}

const JobExperience: React.FC<JobExperienceProps> = ({
  experiences,
  theme,
}) => {
  const { t } = useTranslation();

  return (
    <JobExperiencesContainer theme={theme}>
      {experiences.map((experience, index) => (
        <div key={index} className={`${experience.className || "job"} job`}>
          <span className="time-line"></span>
          <span className="date">
            {experience.field
              ? `${experience.date} - ${t(experience.field)}`
              : experience.date}
          </span>
          <span className="role">{t(experience.role)}</span>
          <span className="company">{experience.company}</span>
          <span className="technologies">{experience.technologies}</span>
        </div>
      ))}
    </JobExperiencesContainer>
  );
};

export default JobExperience;
