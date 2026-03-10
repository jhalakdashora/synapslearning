/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Synaps Brand Colors
                brand: {
                    50: '#f0f4ff',
                    100: '#e0eaff',
                    200: '#c2d3ff',
                    300: '#96b3ff',
                    400: '#6088ff',
                    500: '#3a5ff8',
                    600: '#2240ee',
                    700: '#1a30d8',
                    800: '#1b29ae',
                    900: '#1d278a',
                    950: '#131759',
                },
                accent: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                violet: {
                    500: '#8b5cf6',
                    600: '#7c3aed',
                },
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #131759 0%, #1a30d8 40%, #2240ee 70%, #3a5ff8 100%)',
                'dark-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #111827 100%)',
                'card-gradient': 'linear-gradient(135deg, rgba(58,95,248,0.1) 0%, rgba(139,92,246,0.1) 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 8s linear infinite',
                'counter': 'counter 2s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    from: { boxShadow: '0 0 20px rgba(58,95,248,0.3)' },
                    to: { boxShadow: '0 0 40px rgba(58,95,248,0.6), 0 0 80px rgba(139,92,246,0.2)' },
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                slideInLeft: {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    from: { opacity: '0', transform: 'translateX(30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
            boxShadow: {
                'brand': '0 4px 30px rgba(58,95,248,0.25)',
                'brand-lg': '0 8px 60px rgba(58,95,248,0.35)',
                'card': '0 2px 20px rgba(0,0,0,0.08)',
                'card-dark': '0 2px 20px rgba(0,0,0,0.4)',
                'glow-brand': '0 0 30px rgba(58,95,248,0.4)',
                'glow-accent': '0 0 30px rgba(249,115,22,0.4)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
