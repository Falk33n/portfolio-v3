import { ItemListSection } from '@/components/section';
import { projectsData } from '@/data';

export const Projects = () => {
  return (
    <ItemListSection
      id='projects'
      dataArray={projectsData}
      link={{
        href: '',
        target: '_self',
        srText: 'Go to my full project archive.',
        text: 'View full project archive',
      }}
    />
  );
};

Projects.displayName = 'Projects';
