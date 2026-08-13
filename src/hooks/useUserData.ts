import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export interface UserData {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  phone: string | null;
  avatar: string | null;
}

// In-memory cache so sidebar & settings share the same data without double fetching
let cachedUser: UserData | null = null;
let isFetching = false;
const subscribers: Array<(user: UserData | null) => void> = [];

const notifySubscribers = (user: UserData | null) => {
  cachedUser = user;
  subscribers.forEach((cb) => cb(user));
};

export const invalidateUserCache = () => {
  cachedUser = null;
};

const API_URL = "https://aigenix-api-app-services.three-shelves.com/users/by-id";
const ACCOUNT_ID = "aigenix-uat";

export const useUserData = (forceRefresh = false) => {
  const [user, setUser] = useState<UserData | null>(cachedUser);
  const [loading, setLoading] = useState<boolean>(!cachedUser);
  const [error, setError] = useState<string | null>(null);

  // Subscribe to shared updates
  useEffect(() => {
    const handler = (u: UserData | null) => {
      setUser(u);
      setLoading(false);
    };
    subscribers.push(handler);
    return () => {
      const idx = subscribers.indexOf(handler);
      if (idx !== -1) subscribers.splice(idx, 1);
    };
  }, []);

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setLoading(false);
      setError("No access token");
      return;
    }

    const cleanToken = token.replace(/^[\"']|[\"']$/g, "").trim();

    // If already fetching, skip duplicate
    if (isFetching) return;
    isFetching = true;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-account-id": ACCOUNT_ID,
          Authorization: `Bearer ${cleanToken}`,
        },
      });

      if (response.data?.success) {
        notifySubscribers(response.data.data);
      } else {
        notifySubscribers(null);
      }
    } catch (err: any) {
      console.error("useUserData: fetch failed", err?.response?.data || err);
      setError("Failed to fetch user data");
      notifySubscribers(null);
    } finally {
      isFetching = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch if no cache or force refresh requested
    if (!cachedUser || forceRefresh) {
      fetchUser();
    }
  }, [fetchUser, forceRefresh]);

  return { user, loading, error, refetch: fetchUser };
};
