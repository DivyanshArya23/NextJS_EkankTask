import { Quill } from 'react-quill';
const BubbleTheme = Quill.import('themes/bubble');

class ExtendBubbleTheme extends BubbleTheme {
  constructor(quill, options) {
    super(quill, options);

    quill.on('selection-change', (range) => {
      if (range) {
        quill.theme.tooltip.show();
        quill.theme.tooltip.position(quill.getBounds(range));
      }
    });
  }
}

Quill.register('themes/bubble', ExtendBubbleTheme);
