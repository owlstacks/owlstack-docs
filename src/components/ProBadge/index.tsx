import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ProBadgeProps {
  children?: ReactNode;
  plan?: string;
}

export default function ProBadge({children, plan}: ProBadgeProps): ReactNode {
  return (
    <span className={styles.proBadge}>
      {children || plan || 'Pro'}
    </span>
  );
}
