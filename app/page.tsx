import coinListAdapter from "@/adapters/coinListAdapter";
import queryCoinList from "./api/getCoinList/queryCoinList";
import HomePage from "@/pages/HomePage";

const getInitialData = async () => {
  try {
    const response = await queryCoinList();

    return coinListAdapter(response.data);
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default async function Home() {
  const initialData = await getInitialData();
  return <HomePage initialData={initialData} />;
}
