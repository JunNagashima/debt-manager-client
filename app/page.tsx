export const formatMessage = (message: string) => {
  return `Hello: ${message}`;
};

const Page = async () => {
  const fetchData = async () => {
    const apiUrl = process.env.API_URL!;
    try {
      const res = await fetch(apiUrl, {
        cache: 'no-store',
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return { name: 'Unable to connect to server' };
    }
  };

  const data = await fetchData();

  return (
    <div>
      {formatMessage(data.name)}
    </div>
  );
}

export default Page;
