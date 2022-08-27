import React, { Fragment, useState, useCallback } from 'react';
import { v4 } from 'uuid';
import dynamic from 'next/dynamic';
import cns from 'classnames';
import cls from './editor.module.scss';
import 'react-quill/dist/quill.bubble.css';
import { EDITOR_TYPES, toolbarConfig } from '../../config';
import ImageCard from '../ImageCard';
import AddEditor from './AddEditor';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import './CustomBubbleTheme';
import DeleteBtn from './DeleteBtn';

const Editor = () => {
  const [editorList, setEditorList] = useState([
    { id: v4(), type: EDITOR_TYPES.TEXT, value: '' },
  ]);

  const handleEditorValueChange = useCallback(
    ({ value, index }) => {
      setEditorList((editorList) => {
        const currEditor = { ...editorList[index] };
        currEditor.value = value;
        const editorListCopy = [...editorList];
        editorListCopy[index] = currEditor;
        return editorListCopy;
      });
    },
    [setEditorList]
  );

  const getEditor = ({ type, value }, index) => {
    switch (type) {
      case EDITOR_TYPES.TEXT:
        return (
          <ReactQuill
            theme="bubble"
            placeholder="Write a Post..."
            className={cns(cls.reactQuillEditor, 'flex-grow-1')}
            onChange={(e) => {
              handleEditorValueChange({ value: e, index });
            }}
            modules={{ toolbar: toolbarConfig }}
          />
        );

      case EDITOR_TYPES.IMAGE:
        return <ImageCard src={value} />;

      default:
        return <></>;
    }
  };

  const handleDelete = (index) => {
    setEditorList((editorList) => {
      const editorListCopy = [...editorList];
      editorListCopy.splice(index, 1);
      return editorListCopy;
    });
  };

  return (
    <div className="d-flex flex-column pb-5 mb-5">
      {editorList?.map((editor, index, list) => (
        <Fragment key={editor.id}>
          <div className="d-flex flex-row mb-4">
            <DeleteBtn
              className="d-flex align-items-center pe-2"
              onClick={() => {
                handleDelete(index);
              }}
            />
            {getEditor(editor, index)}
          </div>
          {/* {index === list.length - 1 && (
            <AddEditor index={index} setEditorList={setEditorList} />
          )} */}
        </Fragment>
      ))}
      <AddEditor index={editorList.length} setEditorList={setEditorList} />
    </div>
  );
};

export default React.memo(Editor);
