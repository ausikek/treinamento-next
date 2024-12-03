import NasaPage from '@/components/NasaPage';

export default function Page({
  params,
}: {
  params: Promise<{ card: string }>;
}) {
  return <NasaPage params={params} />;
}
