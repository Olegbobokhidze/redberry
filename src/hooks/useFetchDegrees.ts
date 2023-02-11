import { useState, useEffect } from "react";

type Degree = {
  id: number;
  title: string;
};

const useFetchDegrees = () => {
  const [degrees, setDegrees] = useState<Degree[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setDegrees(data);
    };
    fetchData();
  }, []);

  return degrees;
};

export default useFetchDegrees;
