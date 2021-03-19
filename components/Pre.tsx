import { styled, theme } from '@modulz/design-system';

export const Pre = styled('pre', {
  $$background: 'white',
  $$text: '$colors$hiContrast',
  $$outline: '0 0 0 1px $colors$slate500',
  $$syntax1: '$colors$blue900',
  $$syntax2: '$colors$cyan900',
  $$syntax3: '$colors$slate800',
  $$syntax4: '$colors$red900',
  $$syntax5: '$colors$green900',
  $$lineNumbers: '$colors$indigo300',
  $$fadedLines: '$colors$slate800',
  $$highlightedWord1Bg: '$colors$violet200',
  $$highlightedWord1BgActive: '$colors$violet400',
  $$highlightedWord1Text: '$colors$violet900',
  $$highlightedWord2Bg: '$colors$red100',
  $$highlightedWord2BgActive: '$colors$red300',
  $$highlightedWord2Text: '$colors$red900',
  $$highlightedWord3Bg: '$colors$green100',
  $$highlightedWord3BgActive: '$colors$green300',
  $$highlightedWord3Text: '$colors$green900',

  boxSizing: 'border-box',
  borderRadius: '$3',
  padding: '$3',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$2',
  lineHeight: '21px',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  color: '$$text',
  boxShadow: '$$outline',

  '& > code': {
    display: 'block',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax1',
  },

  '.token.comment': {
    color: '$$syntax3',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$syntax4',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$syntax5',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWord1Bg',
    $$xOffset: '1px',
    color: '$$highlightedWord1Text',
    backgroundColor: '$$bgAndShadow',
    borderRadius: '$1',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      $$bgAndShadow: '$$highlightedWord1BgActive',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord2Bg',
    color: '$$highlightedWord2Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord2BgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord3Bg',
    color: '$$highlightedWord3Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord3BgActive',
    },
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      paddingLeft: '$4',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
        color: '$$lineNumbers',
      },
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },

  variants: {
    variant: {
      indigo: {
        $$background: theme.colors.blue1000.value,
        $$text: theme.colors.gray300.value,
        $$outline: 'none',
        $$syntax1: theme.colors.cyan600.value,
        $$syntax2: theme.colors.pink600.value,
        $$syntax3: theme.colors.violet700.value,
        $$syntax4: '$colors$red700',
        $$syntax5: '$colors$green700',
        $$lineNumbers: 'hsl(210 37% 35%)',
        $$fadedLines: 'hsl(210 37% 35%)',
        $$highlightedWord1Bg: '$colors$indigo1000',
        $$highlightedWord1BgActive: '$colors$indigo900',
        $$highlightedWord1Text: '$colors$indigo200',
        $$highlightedWord2Bg: '$colors$red1000',
        $$highlightedWord2BgActive: '$colors$red900',
        $$highlightedWord2Text: '$colors$red200',
        $$highlightedWord3Bg: '$colors$green1000',
        $$highlightedWord3BgActive: '$colors$green900',
        $$highlightedWord3Text: '$colors$green200',
      },
      yellow: {
        $$background: theme.colors.yellow1000.value,
        $$text: theme.colors.gray300.value,
        $$outline: 'none',
        $$syntax1: theme.colors.cyan600.value,
        $$syntax2: theme.colors.yellow600.value,
        $$syntax3: theme.colors.violet700.value,
        $$syntax4: '$colors$red700',
        $$syntax5: '$colors$green700',
        $$lineNumbers: 'hsl(210 37% 35%)',
        $$fadedLines: 'hsl(210 37% 35%)',
        $$highlightedWord1Bg: '$colors$indigo1000',
        $$highlightedWord1BgActive: '$colors$indigo900',
        $$highlightedWord1Text: '$colors$indigo200',
        $$highlightedWord2Bg: '$colors$red1000',
        $$highlightedWord2BgActive: '$colors$red900',
        $$highlightedWord2Text: '$colors$red200',
        $$highlightedWord3Bg: '$colors$green1000',
        $$highlightedWord3BgActive: '$colors$green900',
        $$highlightedWord3Text: '$colors$green200',
      },
      pink: {
        $$background: theme.colors.pink200.value,
        $$text: theme.colors.blue800.value,
        $$outline: '0 0 0 1px $colors$pink300',
        $$syntax1: theme.colors.cyan900.value,
        $$syntax2: theme.colors.pink800.value,
        $$syntax3: theme.colors.violet700.value,
        $$syntax4: '$colors$red700',
        $$syntax5: '$colors$green700',
        $$lineNumbers: 'hsl(210 37% 35%)',
        $$fadedLines: 'hsl(210 37% 35%)',
        $$highlightedWord1Bg: '$colors$indigo1000',
        $$highlightedWord1BgActive: '$colors$indigo900',
        $$highlightedWord1Text: '$colors$indigo200',
        $$highlightedWord2Bg: '$colors$red1000',
        $$highlightedWord2BgActive: '$colors$red900',
        $$highlightedWord2Text: '$colors$red200',
        $$highlightedWord3Bg: '$colors$green1000',
        $$highlightedWord3BgActive: '$colors$green900',
        $$highlightedWord3Text: '$colors$green200',
      },
    },
  },
});
