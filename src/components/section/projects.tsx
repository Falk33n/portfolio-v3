import { CardSection } from '@/components/section';
import { projectsData } from '@/data';

export const Projects = () => {
  return (
    <CardSection
      id='projects'
      dataArray={projectsData}
      link={{
        href: '',
        target: '_self',
        ariaLabel: 'Go to my full project archive.',
        text: 'View full project archive',
      }}
    />
  );
};

Projects.displayName = 'Projects';
