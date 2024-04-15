import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { useEffect, useState } from "react";

export const useIdbCandidates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLiveQuery(() => db.candidates.toArray());
  useEffect(() => {
    setIsLoading(false);
  }, [data]);
  return { isLoading, data };
};
