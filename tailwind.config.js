module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
      ],
    theme: {
        extend: {
            fontSize: {
                'full': '5rem',
            },
            fontFamily: {
                body: ["Manrope", "sans-serif"],
                brand: [ 'Open Sans', 'sans-serif'],
            },
            colors: {
                primary: '#0f1621',
                secondary: '#C39EA0',
                accent: '#F8E5E5'
            },
            borderWidth: {
                '10': '10px',
                '20': '20px',
            },
            inset: {
                '1/2': '50%',
                '-20': '-20rem',
                '-30': '-30rem'
            },
            zIndex: {
                '-10': '-10',
            },
            translate: {
                '-5/7': '-71.4285714%',
            }
        },
    },
    variants: {},
    plugins: [],
}
