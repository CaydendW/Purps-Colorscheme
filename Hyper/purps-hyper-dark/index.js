
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(76, 44, 164, 0.5)',
        cursorAccentColor: '#1f132a',
        foregroundColor: '#c3c1c4',
        backgroundColor: '#1f132a',
        selectionColor: 'rgba(63, 55, 179, 0.09999999999999998)',
        borderColor: '#312684',
        colors: {
          black: '#1f132a',
          red: '#f53054',
          green: '#b03454',
          yellow: '#b58ddb',
          blue: '#3f37b3',
          magenta: '#9c7ade',
          cyan: '#312684',
          white: '#c3c1c4',
          lightBlack: '#3a3044',
          lightRed: '#eca1b4',
          lightGreen: '#b03454',
          lightYellow: '#b58ddb',
          lightBlue: '#3f37b3',
          lightMagenta: '#9c7ade',
          lightCyan: '#312684',
          lightWhite: '#dedede',
        },
      });
    };
  