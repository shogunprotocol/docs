import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/ai-engine',
        'architecture/execution-layer',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/reactive-hooks',
        'integrations/defi-protocols',
        'integrations/data-sources',
      ],
    },
  ],
};

export default sidebars;
