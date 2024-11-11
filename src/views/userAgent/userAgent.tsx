"use client"
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
  const { userAgent } = useUserAgentContext();
  return (
    <div>
      {userAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}
    </div>
  );
};
