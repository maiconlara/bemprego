import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";

export interface Address {
  cep: string;
  state: string;
  city: string;
}

const getAddress = async (postalCode: string) => {
  const { data } = await api.get<Address>(`${postalCode}`);
  return data;
};

export const useGetAddress = (postalCode: string) => {
  return useQuery({
    queryKey: ["address", postalCode],
    queryFn: () => getAddress(postalCode),
    enabled: false,
  });
};
