import type {ReactNode} from 'react';
import Admonition from '@theme/Admonition';

interface ProFeatureProps {
  children: ReactNode;
}

export default function ProFeature({children}: ProFeatureProps): ReactNode {
  return (
    <Admonition type="tip" title="🔒 Pro Feature">
      <p>
        This feature requires <strong>OwlStack Pro</strong>.{' '}
        <a href="https://owlstack.dev">Learn more about licensing →</a>
      </p>
      {children}
    </Admonition>
  );
}
