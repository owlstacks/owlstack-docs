import type {ReactNode} from 'react';
import styles from './styles.module.css';

interface Platform {
  name: string;
  maxText: string;
  maxMedia: string;
  mediaTypes: string;
  features: string;
}

const platforms: Platform[] = [
  {name: 'Telegram', maxText: '4,096', maxMedia: '10', mediaTypes: 'JPEG, PNG, GIF, MP4, OGG', features: 'Media groups, inline keyboards, location/contact/venue'},
  {name: 'Twitter/X', maxText: '280', maxMedia: '4', mediaTypes: 'JPEG, PNG, GIF, MP4', features: 'OAuth 1.0a, polls, quote tweets'},
  {name: 'Facebook', maxText: '63,206', maxMedia: '1', mediaTypes: 'JPEG, PNG, GIF, BMP, MP4, AVI', features: 'Scheduled publishing, privacy targeting'},
  {name: 'LinkedIn', maxText: '3,000', maxMedia: '1', mediaTypes: 'JPEG, PNG, GIF', features: 'Personal profiles & pages, multi-step upload'},
  {name: 'Discord', maxText: '2,000', maxMedia: '10', mediaTypes: 'JPEG, PNG, GIF, WebP, MP4', features: 'Bot & webhook modes, rich embeds'},
  {name: 'Instagram', maxText: '2,200', maxMedia: '10', mediaTypes: 'JPEG, MP4', features: 'Carousels, Reels, Stories'},
  {name: 'Pinterest', maxText: '800', maxMedia: '—', mediaTypes: 'JPEG, PNG, GIF, WebP, MP4', features: 'Board & section targeting, video pins'},
  {name: 'Reddit', maxText: '40,000', maxMedia: '1', mediaTypes: 'JPEG, PNG, GIF', features: 'Self & link posts, flair, NSFW/spoiler'},
  {name: 'Slack', maxText: '40,000', maxMedia: '—', mediaTypes: '—', features: 'Bot & webhook modes, Block Kit'},
  {name: 'Tumblr', maxText: '4,096', maxMedia: '—', mediaTypes: '—', features: 'NPF content blocks, draft/queue/private'},
  {name: 'WhatsApp', maxText: '4,096', maxMedia: '—', mediaTypes: 'JPEG, PNG, MP4, PDF, DOCX', features: 'Template messages, document sending'},
];

export default function PlatformTable(): ReactNode {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.platformTable}>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Max Text</th>
            <th>Max Media</th>
            <th>Media Types</th>
            <th>Notable Features</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((p) => (
            <tr key={p.name}>
              <td><strong>{p.name}</strong></td>
              <td>{p.maxText}</td>
              <td>{p.maxMedia}</td>
              <td>{p.mediaTypes}</td>
              <td>{p.features}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
