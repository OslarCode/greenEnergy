// src/app/utils/analytics.ts
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "../lib/gtag";

const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    gtag.pageview(url);
  }, [pathname, searchParams]);
};

export default useAnalytics;
