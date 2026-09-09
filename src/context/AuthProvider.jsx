import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const ADMIN_EMAILS = [
  import.meta.env.VITE_ADMIN_EMAIL_1,
  import.meta.env.VITE_ADMIN_EMAIL_2,
].filter(Boolean);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = (currentUser) => {
    if (!currentUser?.email) {
      return false;
    }

    return ADMIN_EMAILS.some(
      (email) => email.toLowerCase() === currentUser.email.toLowerCase()
    );
  };

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const currentUser = session?.user ?? null;

      setUser(currentUser);
      setIsAdmin(checkAdmin(currentUser));
      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;

      setUser(currentUser);
      setIsAdmin(checkAdmin(currentUser));
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { data: null, error };
    }

    if (!checkAdmin(data.user)) {
      await supabase.auth.signOut();

      return {
        data: null,
        error: new Error("You are not authorized as an admin."),
      };
    }

    return { data, error: null };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      setUser(null);
      setIsAdmin(false);
    }

    return { error };
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}