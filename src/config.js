export const EDITOR_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
};

export const editorOptions = [
  {
    value: EDITOR_TYPES.TEXT,
    label: 'Text',
    description: 'Just Start writing with plain text',
  },
  {
    value: EDITOR_TYPES.IMAGE,
    label: 'Image',
    description: 'Upload or Embed with a link',
  },
];
export const toolbarConfig = [
  ['bold', 'italic', 'underline', 'strike'],
  ['image', 'clean'],
];
