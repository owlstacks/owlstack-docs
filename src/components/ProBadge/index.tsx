import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface ProBadgeProps {
  children?: ReactNode;
}

export default function ProBadge({children}: ProBadgeProps): ReactNode {
  return (
    <span className={styles.proBadge}>
      {children || 'Pro'}
    </span>
  );
}
