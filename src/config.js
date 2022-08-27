export const EDITOR_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
};

export const editorOptions = [
  {
    value: EDITOR_TYPES.TEXT,
    label: 'Text',
    description: 'Just Start writing with plain text',
    image: '/images/turtle.jpg',
  },
  {
    value: EDITOR_TYPES.IMAGE,
    label: 'Image',
    description: 'Upload or Embed with a link',
    image: '/images/turtle.jpg',
  },
];

export const toolbarConfig = [
  ['bold', 'italic', 'underline', 'strike'],
  ['image', 'clean'],
];

// export const toolbarConfig = [
//   [{ header: [2, 3, false] }],
//   ['bold', 'italic', 'underline', 'strike'],
//   [{ list: 'ordered' }, { list: 'bullet' }],
//   [{ script: 'sub' }, { script: 'super' }],
//   ['link', 'image'],
//   [{ indent: '-1' }, { indent: '+1' }],
//   [{ align: [] }],
//   ['blockquote', 'code-block'],
// ];
