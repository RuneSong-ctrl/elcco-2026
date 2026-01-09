import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Palet Warna ELCCO 2026
                "frosted-mint": {
                    50: "#eef8ec",
                    100: "#dcf1da",
                    200: "#b9e3b5",
                    300: "#96d68f",
                    400: "#73c86a",
                    500: "#51ba45",
                    600: "#409537",
                    700: "#307029",
                    800: "#204a1c",
                    900: "#10250e",
                    950: "#0b1a0a",
                },
                fern: {
                    50: "#eef6ee",
                    100: "#deedde",
                    200: "#bddbbd",
                    300: "#9cc99c",
                    400: "#7ab87a",
                    500: "#59a659",
                    600: "#478547",
                    700: "#366336",
                    800: "#244224",
                    900: "#122112",
                    950: "#0c170c",
                },
                "ivory-mist": {
                    50: "#fff8e5",
                    100: "#fff1cc",
                    200: "#ffe499",
                    300: "#ffd666",
                    400: "#ffc933",
                    500: "#ffbb00",
                    600: "#cc9600",
                    700: "#997000",
                    800: "#664b00",
                    900: "#332500",
                    950: "#241a00",
                },
                "muted-olive": {
                    50: "#eff5ef",
                    100: "#dfecdf",
                    200: "#bfd9bf",
                    300: "#9fc69f",
                    400: "#80b380",
                    500: "#609f60",
                    600: "#4d804d",
                    700: "#396039",
                    800: "#264026",
                    900: "#132013",
                    950: "#0d160d",
                },
                "dark-spruce": {
                    50: "#effbea",
                    100: "#dff7d4",
                    200: "#bfefa9",
                    300: "#9fe77e",
                    400: "#80de54",
                    500: "#60d629",
                    600: "#4dab21",
                    700: "#398118",
                    800: "#265610",
                    900: "#132b08",
                    950: "#0d1e06",
                },
                // Shadcn Colors (Wajib ada biar shadcn ga error)
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // Animasi Float Gundam
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
