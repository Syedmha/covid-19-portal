const url = "https://api.covid19india.org/v4/min/data-all.min.json";

export const fetchData = async () => {
    try {
        const response = await fetch(url);
        return response;
    }
    catch {

    }
}