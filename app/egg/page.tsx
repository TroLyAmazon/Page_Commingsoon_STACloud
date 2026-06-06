import type { Metadata } from 'next';
import { EggPage } from '@/components/egg/page';

export const metadata: Metadata = {
  title: 'STACloud Egg Catalog | Supported Eggs',
  description:
    'Danh sách egg STACloud đang hỗ trợ cho AI, Code Languages, Linux, Minecraft, Proxy và Voice Servers.',
};

export default function EggRoute() {
  return <EggPage />;
}
