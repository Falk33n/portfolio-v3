import { CardSection } from '@/components/section';
import { experienceData } from '@/data';

export const Experience = () => {
  return (
    <CardSection
      id='experience'
      dataArray={experienceData}
      link={{
        href: '',
        target: '_blank',
        ariaLabel: 'Go to my full Résumé.',
        text: 'View full Résumé',
      }}
    />
  );
};

Experience.displayName = 'Experience';
