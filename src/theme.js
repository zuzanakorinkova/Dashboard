import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        indigo: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#1F2124",
        },
        black: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#1F2124",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        gray: {
          100: "#fafafa",
          200: "#f6f6f6",
          300: "#f1f1f1",
          400: "#ededed",
          500: "#e8e8e8",
          600: "#bababa",
          700: "#8b8b8b",
          800: "#5d5d5d",
          900: "#2e2e2e",
        },
        primary: {
          100: "#d2d3d3",
          200: "#a5a6a7",
          300: "#797a7c",
          400: "#4c4d50",
          500: "#1f2124",
          600: "#191a1d",
          700: "#1F2124",
          800: "#fafafa",
          900: "#060707",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        accent: {
          100: "#fdddcd",
          200: "#fcbc9c",
          300: "#fa9a6a",
          400: "#f97939",
          500: "#f75707",
          600: "#c64606",
          700: "#943404",
          800: "#632303",
          900: "#311101",
        },
        red: {
          100: "#fdd8cd",
          200: "#fcb29c",
          300: "#fa8b6a",
          400: "#f96539",
          500: "#f73e07",
          600: "#c63206",
          700: "#942504",
          800: "#631903",
          900: "#310c01",
        },
        green: {
          100: "#d5f7cd",
          200: "#abf09b",
          300: "#82e86a",
          400: "#58e138",
          500: "#2ed906",
          600: "#25ae05",
          700: "#1c8204",
          800: "#125702",
          900: "#092b01",
        },
        yellow: {
          100: "#fef1ce",
          200: "#fce39c",
          300: "#fbd46b",
          400: "#f9c639",
          500: "#f8b808",
          600: "#c69306",
          700: "#956e05",
          800: "#634a03",
          900: "#322502",
        },
      }
    : {
        indigo: {
          100: "#1F2124",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        black: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#1F2124",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        gray: {
          100: "#2e2e2e",
          200: "#5d5d5d",
          300: "#21262C",
          400: "#bababa",
          500: "#6A687B",
          600: "#ededed",
          700: "#2A3038",
          800: "#f6f6f6",
          900: "#fafafa",
        },
        primary: {
          100: "#060707",
          200: "#8392A2",
          300: "#5B6876",
          400: "#191a1d",
          500: "#C3C1D1",
          600: "#4c4d50",
          700: "#797a7c",
          800: "#191A1C",
          900: "#d2d3d3",
        },
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        accent: {
          100: "#311101",
          200: "#632303",
          300: "#943404",
          400: "#c64606",
          500: "#f75707",
          600: "#f97939",
          700: "#fa9a6a",
          800: "#fcbc9c",
          900: "#fdddcd",
        },
        red: {
          100: "#310c01",
          200: "#631903",
          300: "#942504",
          400: "#c63206",
          500: "#f73e07",
          600: "#f96539",
          700: "#fa8b6a",
          800: "#fcb29c",
          900: "#fdd8cd",
        },
        green: {
          100: "#092b01",
          200: "#125702",
          300: "#1c8204",
          400: "#25ae05",
          500: "#2ed906",
          600: "#58e138",
          700: "#82e86a",
          800: "#abf09b",
          900: "#d5f7cd",
        },
        yellow: {
          100: "#322502",
          200: "#634a03",
          300: "#956e05",
          400: "#c69306",
          500: "#f8b808",
          600: "#f9c639",
          700: "#fbd46b",
          800: "#fce39c",
          900: "#fef1ce",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.accent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.white[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.accent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.black[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
