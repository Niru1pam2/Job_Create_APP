"use client";

import { getStatsAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import StatsCard from "./StatsCard";

function StatsContainer() {
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatsCard title="pending jobs" value={data?.pending || 0} />
      <StatsCard title="interview set" value={data?.interview || 0} />
      <StatsCard title="jobs declined" value={data?.declined || 0} />
    </div>
  );
}

export default StatsContainer;
