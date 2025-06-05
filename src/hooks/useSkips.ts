import { useQuery } from '@tanstack/react-query';
import type { Skip } from "../interfaces";

const useSkips = () => {
    const link = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

    const fetchSkips = async (): Promise<Skip[]> => {
        const response = await fetch(link);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Invalid API response format');
        }

        return data;
    };

    return useQuery<Skip[], Error>({
        queryKey: ['skips'],
        queryFn: fetchSkips,
        retry: 3,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

export default useSkips;

