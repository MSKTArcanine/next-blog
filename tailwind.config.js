module.exports = {
  theme: {},
  plugins: [
    function ({ addVariant }) {
      addVariant('has-checked', '&:has(input:checked)');
    },
  ],
};