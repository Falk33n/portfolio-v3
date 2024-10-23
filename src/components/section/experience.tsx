import { ItemListSection } from '@/components/section';
import { experienceData } from '@/data';

export const Experience = () => {
  return (
    <ItemListSection
      id='experience'
      dataArray={experienceData}
      link={{
        href: '',
        target: '_blank',
        srText: 'Go to my full Résumé.',
        text: 'View full Résumé',
      }}
    />
  );
};

Experience.displayName = 'Experience';
