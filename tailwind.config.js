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
                '0.8' : '0.8rem'
            },
            fontFamily: {
                body: ["Manrope", "sans-serif"],
                brand: [ 'Raleway', 'sans-serif'],
            },
            colors: {
                primary: '#0f1621',
                secondary: '#C39EA0',
                accent: '#F8E5E5'
            },
            borderWidth: {
                '1' : '1px',
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
