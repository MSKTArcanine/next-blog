

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: { Authorization: `bearer ${session.accessToken}` },
  });

  const data = await res.json(); // parser d’abord
  console.log('Fetcher : ', data);
  if (!res.ok) throw new Error(data?.message || 'Failed to fetch'); // maintenant data.message est dispo
  return data;
};