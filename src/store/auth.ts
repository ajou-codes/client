import jwtDecode from "jwt-decode";
import create, { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

type ProfileType = {
  name: string;
  email: string;
  picture: string;
  hd: string;
};

interface IAuth {
  token: string;
  getUserId: () => number | undefined;
  refreshToken: string;
  isLoggedin: boolean;
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
  setToken: (token: string, refreshToken: string) => void;
  logout: () => void;
}

const store = persist<IAuth>(
  (set, get) => ({
    token: "",
    refreshToken: "",
    isLoggedin: false,
    profile: {
      email: "",
      hd: "",
      name: "",
      picture: "",
    },
    getUserId: () => {
      try {
        return jwtDecode<Record<"userId", number>>(get().token).userId;
      } catch (e) {
        return undefined;
      }
    },
    setProfile: (profile: ProfileType) =>
      set({
        profile,
      }),
    setToken: (token: string, refreshToken: string) =>
      set({
        token,
        refreshToken,
        isLoggedin: true,
      }),
    logout: () => {
      set({
        token: "",
        refreshToken: "",
        isLoggedin: false,
        profile: {
          email: "",
          hd: "",
          name: "",
          picture: "",
        },
      });
    },
  }),
  {
    name: "ajoucloud",
    getStorage: () => localStorage,
  }
);

export const useAuth = create(
  import.meta.env.DEV
    ? (devtools(store) as StateCreator<IAuth>)
    : (store as StateCreator<IAuth>)
);
