/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			fontFamily: {
				Poppins: "'Poppins', serif",

			},
			boxShadow: {
				// custom: "0px 15px 30px -4px rgba(0, 0, 0, 0.05)",
				// "custom-lg": "0px 15px 30px -4px rgba(0, 0, 0, 0.05)",
				// chatbox: "0px 20px 40px -4px rgba(0, 0, 0, 0.08)",
			},
			backgroundImage: () => ({
				"gradient-primary": `linear-gradient(1.77deg, rgba(77,138,210,0.2)1.55%, rgba(141,188,242,0.177405)49.13%, rgba(46,125,218,0.0456273)326.65%, rgba(46, 125, 218, 0)326.65%)`,
        "gradient-secondary": "url('./src/assets/Rectangle 422.png')", 
        
			}),
		},
	},
	plugins: [],
};

