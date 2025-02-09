type DatabaseDetailPageProps = {
  params: Promise<{ id: string }>;
};

const DatabaseDetailPage = async ({ params }: DatabaseDetailPageProps) => {
  const { id } = await params;
  return <>{id}</>;
};

export default DatabaseDetailPage;
