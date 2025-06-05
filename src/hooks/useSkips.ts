import { useQuery } from '@tanstack/react-query';
import type { Skip } from "../interfaces";

const useSkips = () => {
    const link = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

    const fetchSkips = async (): Promise<Skip[]> => {
        const response = await fetch(link);
        return response.json();
    };

    return useQuery({
        queryKey: ['skips'],
        queryFn: fetchSkips
    });
}

export default useSkips;

